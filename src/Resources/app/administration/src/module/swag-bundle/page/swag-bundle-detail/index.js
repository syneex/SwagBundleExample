import template from './swag-bundle-detail.html.twig';

const { Component, Mixin } = Shopware;

Component.register('swag-bundle-detail', {
    template,

    inject: [
        'repositoryFactory'
    ],

    mixins: [
        Mixin.getByName('notification')
    ],

    data() {
        return {
            bundle: null,
            isLoading: false,
            processSuccess: false,
            repository: null
        };
    },

    metaInfo() {
        return {
            title: this.$createTitle()
        };
    },

    computed: {
        options() {
            return [
                { value: 'absolute', name: this.$tc('swag-bundle.detail.absoluteText') },
                { value: 'percentage', name: this.$tc('swag-bundle.detail.percentageText') },
            ];
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.repository = this.repositoryFactory.create('swag_bundle');
            this.getBundle();
        },

        getBundle() {
            this.repository.get(this.$route.params.id, Shopware.Context.api).then((entity) => {
                this.bundle = entity;
            });
        },

        onClickSave() {
            this.isLoading = true;

            this.repository.save(this.bundle, Shopware.Context.api).then(() => {
                this.getBundle();
                this.isLoading = false;
                this.processSuccess = true;
            }).catch((exception) => {
                this.isLoading = false;
                this.createNotificationError({
                    title: this.$tc('swag-bundle.detail.errorTitle'),
                    message: exception
                });
            });
        },

        saveFinish() {
            this.processSuccess = false;
        }
    }
});