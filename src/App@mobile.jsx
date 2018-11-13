import { Registry, withRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';
import AppCommon from './App';
import TouchContainer from './view/components/TouchContainer/TouchContainer@mobile';

const cnApp = cn('App');
const cnTouchContainer = cn('TouchContainer');
const registry = new Registry({ id: cnApp() });

registry.set(cnTouchContainer(), TouchContainer);
export default withRegistry(registry)(AppCommon);
