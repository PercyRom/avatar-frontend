/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('demo.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onColVerDetalle: function (grid, info) {
        this.resetDetalle();
        this.initVerDetalle(info);
    },

    resetDetalle: function () {
        const frmPokemon = this.lookupReference('frmPokemon');
        frmPokemon.reset();
    },

    initVerDetalle: async function (info) {
        const frmPokemon = this.lookupReference('frmPokemon');
        try {
            frmPokemon.mask();
            const { record } = info;
            const response = await this.requestPokemonDetalle(record.get('url'));
            
            response.color = response.color.name;

            if (response.egg_groups.length > 0) {
                response.grupos = response.egg_groups.reduce((acumulador, valor, index) => {
                    if (index === 0) acumulador += valor.name;
                    else acumulador += ` | ${valor.name}`;
                    return acumulador;
                }, '');
            }
            
            const btnEvoChain = this.lookupReference('btnEvoChain');

            btnEvoChain.internalUrl = response.evolution_chain ? response.evolution_chain.url : '';

            frmPokemon.setValues(response);

        } catch (error) {
            console.log(error);
        } finally {
            frmPokemon.unmask();
        }
    },

    requestPokemonDetalle: function (url) {
        return new Promise((resolve, reject) => {
            Ext.Ajax.request({
                url: 'http://localhost:8080/pokemon/specie',
                method: 'GET',
                params: { url: url },
                success: (response, request) => { resolve(Ext.decode(response.responseText)); },
                failure: (response, request) => { reject(new Error('Failure Request: Remover')); }
            });
        });
    },

    onBtnEvoChainHandler: async function (button) {
        try {
            if (!button.internalUrl) return;
            const response = await this.requestPokemonEvolutionChain(button.internalUrl);
            const displayEvoChain = this.lookupReference('displayEvoChain');
            displayEvoChain.setValue(this.getStringChain(response.chain));
        } catch (error) { }
    },

    requestPokemonEvolutionChain: function (url) {
        return new Promise((resolve, reject) => {
            Ext.Ajax.request({
                url: 'http://localhost:8080/pokemon/evolution-chain',
                method: 'GET',
                params: { url: url },
                success: (response, request) => { resolve(Ext.decode(response.responseText)); },
                failure: (response, request) => { reject(new Error('Failure Request: Remover')); }
            });
        });
    },

    getStringChain: function (evoChain) {
        let specieName = '';
        if (evoChain.evolves_to && evoChain.evolves_to.length > 0) {
            specieName = this.getStringChain(evoChain.evolves_to[0]);
        }
        if (evoChain.species) {
            specieName = specieName ? `${evoChain.species.name} > ${specieName}` : evoChain.species.name;
        }
        return specieName;
    }
});
