import { Ease, Expo, TweenMax } from "gsap";
import * as THREE from "three";

import * as Checker from "./checker";

export interface IHoverEffectOptions {
    intensity?: number;
    speedIn?: number;
    speedOut?: number;
    easing?: Ease;
    image1: string;
    image2: string;
    displacementImage: string;
}

export class HoverEffect {
    private vertexShader: string = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `;

    private fragmentShader: string = `
        varying vec2 vUv;

        uniform sampler2D texture;
        uniform sampler2D texture2;
        uniform sampler2D disp;

        // uniform float time;
        // uniform float _rot;
        uniform float dispFactor;
        uniform float effectFactor;

        // vec2 rotate(vec2 v, float a) {
        //  float s = sin(a);
        //  float c = cos(a);
        //  mat2 m = mat2(c, -s, s, c);
        //  return m * v;
        // }

        void main() {

            vec2 uv = vUv;

            // uv -= 0.5;
            // vec2 rotUV = rotate(uv, _rot);
            // uv += 0.5;

            vec4 disp = texture2D(disp, uv);

            vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
            vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);

            vec4 _texture = texture2D(texture, distortedPosition);
            vec4 _texture2 = texture2D(texture2, distortedPosition2);

            vec4 finalTexture = mix(_texture, _texture2, dispFactor);

            gl_FragColor = finalTexture;
            // gl_FragColor = disp;
        }
        `;
        
    private easing: Ease;
    private speedIn: number;
    private speedOut: number;
    private material: THREE.ShaderMaterial;
    private renderer: THREE.WebGLRenderer;
    private scene: THREE.Scene;
    private camera: THREE.OrthographicCamera;

    constructor(opts: IHoverEffectOptions) {
        this.speedIn = opts.speedIn || 1.6;
        this.speedOut = opts.speedOut || 1.2;
        this.easing = opts.easing || Expo.easeOut;

        const height: number = 100;
        const width: number = 100;

        const textures = {
            displacement: opts.displacementImage,
            img1: opts.image1,
            img2: opts.image2,
        }

        const intensity = opts.intensity || 1;

        this.initRenderer(width, height, intensity, textures);
    }

    public apply(containerElement: HTMLElement, triggerElement: HTMLElement) {
        containerElement.appendChild(this.renderer.domElement);
        
        let evtIn = "mouseenter";
        let evtOut = "mouseleave";

        if (Checker.mobileAndTabletcheck()) {
            evtIn = "touchstart";
            evtOut = "touchend";
        }

        triggerElement.addEventListener(evtIn, () => {
            TweenMax.to(this.material.uniforms.dispFactor, this.speedIn, {
                ease: this.easing,
                value: 1,
            });
        });

        triggerElement.addEventListener(evtOut, () => {
            TweenMax.to(this.material.uniforms.dispFactor, this.speedOut, {
                ease: this.easing,
                value: 0,
            });
        });

        window.addEventListener("resize", () => {
            this.resize(containerElement.offsetWidth, containerElement.offsetHeight);
        });
        
        this.resize(containerElement.offsetWidth, containerElement.offsetHeight);
        this.animate();
    }
    
    public next() {
        TweenMax.to(this.material.uniforms.dispFactor, this.speedIn, {
            ease: this.easing,
            value: 1,
        });
    }
    
    public previous() {
        TweenMax.to(this.material.uniforms.dispFactor, this.speedOut, {
            ease: this.easing,
            value: 0,
        });
    };
    
    private resize(width: number, height: number) {
        this.renderer.setSize(width, height);
    }
    
    // important: this method must be declared as arrow function because of this-problem
    private animate = () => {
        requestAnimationFrame(this.animate);        
        this.renderer.render(this.scene, this.camera);
    };
    
    private initRenderer(width: number, height: number, intensity: number, imageUrls: { displacement: string, img1: string, img2: string }) {
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(
            width / -2,
            width / 2,
            height / 2,
            height / -2,
            1,
            1000
        );

        camera.position.z = 1;

        const renderer = new THREE.WebGLRenderer({
            // alpha: true,
            antialias: false,
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0xffffff, 0.0);
        renderer.setSize(width, height);

        const loader = new THREE.TextureLoader();
        loader.crossOrigin = "";
        const texture1 = loader.load(imageUrls.img1);
        const texture2 = loader.load(imageUrls.img2);
        const disp = loader.load(imageUrls.displacement);
        disp.wrapS = disp.wrapT = THREE.RepeatWrapping;

        texture1.magFilter = texture2.magFilter = THREE.LinearFilter;
        texture1.minFilter = texture2.minFilter = THREE.LinearFilter;

        texture1.anisotropy = renderer.getMaxAnisotropy();
        texture2.anisotropy = renderer.getMaxAnisotropy();

        const material = new THREE.ShaderMaterial({
            fragmentShader: this.fragmentShader,
            opacity: 1.0,
            transparent: true,
            uniforms: {
                disp: { type: "t", value: disp },
                dispFactor: { type: "f", value: 0.0 },
                effectFactor: { type: "f", value: intensity },
                texture: { type: "t", value: texture1 },
                texture2: { type: "t", value: texture2 },
            },
            vertexShader: this.vertexShader,
        });

        const geometry = new THREE.PlaneBufferGeometry(
            width,
            height,
            1
        );
        
        const object = new THREE.Mesh(geometry, material);
        scene.add(object);

        // export values
        this.scene = scene;
        this.camera = camera;
        this.material = material;
        this.renderer = renderer;
    }    
}
