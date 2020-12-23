import { useSelector } from 'react-redux';

export default function useAppSelector() {
  return useSelector((state) => state['app']);
}
