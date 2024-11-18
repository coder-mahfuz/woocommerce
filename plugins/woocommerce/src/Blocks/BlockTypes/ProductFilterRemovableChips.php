<?php
declare( strict_types = 1 );

namespace Automattic\WooCommerce\Blocks\BlockTypes;

/**
 * Product Filter: Removable Chips Block.
 */
final class ProductFilterRemovableChips extends AbstractBlock {

	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'product-filter-removable-chips';

	/**
	 * Render the block.
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content    Block content.
	 * @param WP_Block $block      Block instance.
	 * @return string Rendered block type output.
	 */
	protected function render( $attributes, $content, $block ) {
		$context      = $block->context['filterData'] ?? null;
		$filter_items = $context['items'] ?? array();
		$action       = $context['actions']['removeFilter'] ?? '';

		$style = '';

		$tags = new \WP_HTML_Tag_Processor( $content );
		if ( $tags->next_tag( array( 'class_name' => 'wc-block-product-filter-removable-chips' ) ) ) {
			$classes = $tags->get_attribute( 'class' );
			$style   = $tags->get_attribute( 'style' );
		}

		$wrapper_attributes = array(
			'data-wc-interactive' => wp_json_encode( array( 'namespace' => $this->get_full_block_name() ), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP ),
			'data-wc-key'         => wp_unique_prefixed_id( $this->get_full_block_name() ),
			'data-wc-context'     => wp_json_encode( array( 'removeLabelTemplate' => __( 'Remove %s filter', 'woocommerce' ) ), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP ),
			'class'               => esc_attr( $classes ),
			'style'               => esc_attr( $style ),
		);

		ob_start();
		?>

		<div <?php echo get_block_wrapper_attributes( $wrapper_attributes ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
			<ul class="wc-block-product-filter-removable-chips__items">
				<template
					data-wc-each="state.items"
					data-wc-each-key="context.item.value"
				>
					<li class="wc-block-product-filter-removable-chips__item">
						<span class="wc-block-product-filter-removable-chips__label" data-wc-text="context.item.label"></span>
						<button
							class="wc-block-product-filter-removable-chips__remove"
							data-wc-bind--aria-label="context.item.removeLabel"
							data-wc-on--click="<?php echo esc_attr( $action ); ?>"
							data-wc-bind--data-type="context.item.type"
							data-wc-bind--data-value="context.item.value"
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" class="wc-block-product-filter-removable-chips__remove-icon" aria-hidden="true" focusable="false"><path d="M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"></path></svg>
							<span class="screen-reader-text" data-wc-text="context.item.removeLabel"></span>
						</button>
					</li>
				</template>
				<?php foreach ( $filter_items as $item ) : ?>
					<?php $this->render_chip_item( $item ); ?>
				<?php endforeach; ?>
			</ul>
		</div>

		<?php
		return ob_get_clean();
	}

	/**
	 * Render the chip item of an active filter.
	 *
	 * @param array $item Item data.
	 * @return string Item HTML.
	 */
	private function render_chip_item( $item ) {
		$remove_label = sprintf( __( 'Remove %s', 'woocommerce' ), $item['label'] );
		?>
		<li class="wc-block-product-filter-removable-chips__item" data-wc-each-child>
			<span class="wc-block-product-filter-removable-chips__label">
				<?php echo esc_html( $item['label'] ); ?>
			</span>
			<button
				class="wc-block-product-filter-removable-chips__remove"
				aria-label="<?php echo esc_attr( $remove_label ); ?>"
				data-wc-on--click="<?php echo esc_attr( $item['action'] ); ?>"
				data-type="<?php echo esc_attr( $item['type'] ); ?>"
				data-value="<?php echo esc_attr( $item['value'] ); ?>"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" class="wc-block-product-filter-removable-chips__remove-icon" aria-hidden="true" focusable="false"><path d="M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"></path></svg>
				<span class="screen-reader-text"><?php echo esc_html( $remove_label ); ?></span>
			</button>
		</li>
		<?php
	}
}
