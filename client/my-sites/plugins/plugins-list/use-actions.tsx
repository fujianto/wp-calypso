import { Icon, link, linkOff, trash } from '@wordpress/icons';
import { translate } from 'i18n-calypso';
import { navigate } from 'calypso/lib/navigate';
import { Plugin } from 'calypso/state/plugins/installed/types';
import { PluginActions } from '../hooks/types';

export function useActions(
	bulkActionDialog: ( action: string, plugins: Array< Plugin > ) => void
) {
	const actions = [
		{
			id: 'manage-plugin',
			href: `some-url`,
			callback: ( plugins: Array< Plugin > ) => {
				plugins.length && navigate( '/plugins/' + plugins[ 0 ].slug );
			},
			label: translate( 'Manage Plugin' ),
			isExternalLink: true,
			isEnabled: true,
			supportsBulk: false,
		},
		{
			id: 'activate-plugin',
			href: `some-url`,
			callback: ( plugins: Array< Plugin > ) => {
				bulkActionDialog( PluginActions.ACTIVATE, plugins );
			},
			label: translate( 'Activate' ),
			isExternalLink: true,
			isEnabled: true,
			supportsBulk: true,
			icon: <Icon icon={ link } />,
		},
		{
			id: 'deactivate-plugin',
			href: `some-url`,
			callback: ( plugins: Array< Plugin > ) => {
				bulkActionDialog( PluginActions.DEACTIVATE, plugins );
			},
			label: translate( 'Deactivate' ),
			isExternalLink: true,
			isEnabled: true,
			supportsBulk: true,
			icon: <Icon icon={ linkOff } />,
		},
		{
			id: 'enable-autoupdate',
			href: `some-url`,
			callback: ( plugins: Array< Plugin > ) => {
				bulkActionDialog( PluginActions.ENABLE_AUTOUPDATES, plugins );
			},
			label: translate( 'Enable Autoupdate' ),
			isExternalLink: true,
			isEnabled: true,
			supportsBulk: true,
		},
		{
			id: 'disable-autoupdate',
			href: `some-url`,
			callback: ( plugins: Array< Plugin > ) => {
				bulkActionDialog( PluginActions.DISABLE_AUTOUPDATES, plugins );
			},
			label: translate( 'Disable Autoupdate' ),
			isExternalLink: true,
			isEnabled: true,
			supportsBulk: true,
		},
		{
			id: 'remove-plugin',
			href: `some-url`,
			callback: ( plugins: Array< Plugin > ) => {
				bulkActionDialog( PluginActions.REMOVE, plugins );
			},
			label: translate( 'Remove' ),
			isExternalLink: true,
			isEnabled: true,
			supportsBulk: true,
			icon: <Icon icon={ trash } />,
		},
	];

	return actions;
}
