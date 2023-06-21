import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { core } from './defaults';
import { Category } from './Category';

export const coreAtom = atomWithStorage('core', core);

export const Core = ({ key }) => {
	const [state, setState] = useAtom(coreAtom);
	return (
		<Category category={state} key={key} setState={setState} />
	);
};
