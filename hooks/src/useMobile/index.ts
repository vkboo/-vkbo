import { Grid } from 'antd';

interface IUseMobile {
  (): boolean;
}

const { useBreakpoint } = Grid;

const useMobile: IUseMobile = () => {
  const { xs, md } = useBreakpoint();
  const isMobile = !md || !!xs;
  return isMobile;
};

export default useMobile;
