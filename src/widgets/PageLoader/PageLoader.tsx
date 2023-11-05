import Loader from 'sheared/ui/Loader/Loader';
import { classNames } from 'sheared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';

 interface PageLoaderProps {
 className?: string;
 }
export const PageLoader = ({ className = '' }: PageLoaderProps) => (
    <div className={classNames(cls.pageLoader, {}, [className])}>
        <Loader />
    </div>
);

export default PageLoader;
