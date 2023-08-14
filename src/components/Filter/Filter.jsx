import css from './Filter.module.css'
import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';

export const Filter = () => {
    const dispatch = useDispatch();

    return (
        <div className={css.filter_section}>
            <p>Find your contact:</p>
            <input
                className={css.filter_input}
                type='text'
                onChange={({target: { value }}) => dispatch(updateFilter(value))}
            />
        </div>
    )
}