/**
 * External dependencies
 */
import { sprintf } from '@wordpress/i18n';
import { store, getContext } from '@woocommerce/interactivity';

/**
 * Internal dependencies
 */
import { ProductFiltersContext } from '../../frontend';

type ProductFilterRemovableChipsContext = {
	removeLabelTemplate: string;
};

store( 'woocommerce/product-filter-removable-chips', {
	state: {
		get items() {
			const context = getContext< ProductFilterRemovableChipsContext >();
			const productFiltersContext = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);
			console.log( productFiltersContext.activeFilters );
			return productFiltersContext.activeFilters.map( ( item ) => ( {
				...item,
				// eslint-disable-next-line @wordpress/valid-sprintf
				removeLabel: sprintf( context.removeLabelTemplate, item.label ),
			} ) );
		},
	},
} );
