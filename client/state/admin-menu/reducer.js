/**
 * Internal dependencies
 */
import { withStorageKey, keyedReducer } from 'state/utils';
import 'state/data-layer/wpcom/sites/admin-menu';
import { ADMIN_MENU_RECEIVE } from 'state/action-types';

export const adminMenu = ( state = {}, action ) => {
	switch ( action.type ) {
		case ADMIN_MENU_RECEIVE:
			return { ...state, ...action.menu };
		default:
			return state;
	}
};

export default withStorageKey( 'adminMenu', keyedReducer( 'siteId', adminMenu ) );
