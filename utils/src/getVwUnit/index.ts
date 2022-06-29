interface IParams {
    (num: number, baseWidth?: number): string;
}

const getVwUnit: IParams = (num, baseWidth = 750) => `${num / baseWidth * 100}vw`;

export default getVwUnit;