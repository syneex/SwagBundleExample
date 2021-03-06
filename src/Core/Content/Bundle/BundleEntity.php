<?php declare(strict_types=1);

namespace BundleExample\Core\Content\Bundle;

use BundleExample\Core\Content\Bundle\Aggregate\BundleTranslation;
use Shopware\Core\Content\Product\ProductCollection;
use Shopware\Core\Framework\DataAbstractionLayer\Entity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityIdTrait;

class BundleEntity extends Entity
{
    use EntityIdTrait;

    /**
     * @var string
     */
    protected $name;

    /**
     * @var string
     */
    protected $discountType;

    /**
     * @var float
     */
    protected $discount;

    /**
     * @var ProductCollection|null
     */
    protected $products;

    /**
     * @var BundleTranslationCollection
     */
    protected $translations;

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function getDiscountType(): string
    {
        return $this->discountType;
    }

    /**
     * @param string $discountType
     */
    public function setDiscountType(string $discountType): void
    {
        $this->discountType = $discountType;
    }

    /**
     * @return float
     */
    public function getDiscount(): float
    {
        return $this->discount;
    }

    /**
     * @param float $discount
     */
    public function setDiscount(float $discount): void
    {
        $this->discount = $discount;
    }

    /**
     * @return ProductCollection
     */
    public function getProducts(): ?ProductCollection
    {
        return $this->products;
    }/**
    * @param ProductCollection $products
    */
    public function setProducts(ProductCollection $products): void
    {
        $this->products = $products;
    }

    /**
     * @return BundleTranslationCollection
     */
    public function getTranslations(): BundleTranslationCollection
    {
        return $this->translations;
    }

    /**
     * @param BundleTranslationCollection $translations
     */
    public function setTranslations(BundleTranslationCollection $translations): void
    {
        $this->translations = $translations;
    }
}