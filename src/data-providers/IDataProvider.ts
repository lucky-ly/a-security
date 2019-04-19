export default interface IDataProvider<TOut, TIn = void> {
    getData(arg: TIn): TOut;
}
