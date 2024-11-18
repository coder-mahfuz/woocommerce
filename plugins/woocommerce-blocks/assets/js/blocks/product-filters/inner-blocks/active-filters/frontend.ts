/**
 * External dependencies
 */
import { store, getContext, getElement } from '@woocommerce/interactivity';

/**
 * Internal dependencies
 */
import { ProductFiltersContext, ProductFiltersStore } from '../../frontend';

store( 'woocommerce/product-filter-active', {
	state: {
		get hasFilterOptions() {
			const productFiltersContext = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);
			return productFiltersContext.activeFilters.length > 0;
		},
	},
	actions: {
		removeFilter: () => {
			const { props } = getElement();
			const productFiltersStore = store< ProductFiltersStore >(
				'woocommerce/product-filters'
			);
			productFiltersStore.actions.removeActiveFilter( {
				type: props[ 'data-type' ],
				value: props[ 'data-value' ],
			} );

			productFiltersStore.actions.navigate();
		},
		clearFilters: () => {
			const productFiltersContext = getContext< ProductFiltersContext >(
				'woocommerce/product-filters'
			);
			productFiltersContext.activeFilters = [];
		},
	},
} );
