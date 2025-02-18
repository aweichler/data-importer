/**
 * Pimcore
 *
 * This source file is available under two different licenses:
 * - GNU General Public License version 3 (GPLv3)
 * - Pimcore Commercial License (PCL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 *  @copyright  Copyright (c) Pimcore GmbH (http://www.pimcore.org)
 *  @license    http://www.pimcore.org/license     GPLv3 and PCL
 */

pimcore.registerNS('pimcore.plugin.pimcoreDataImporterBundle.configuration.components.mapping.operator.asGeopolyline');
pimcore.plugin.pimcoreDataImporterBundle.configuration.components.mapping.operator.asGeopolyline = Class.create(pimcore.plugin.pimcoreDataImporterBundle.configuration.components.mapping.abstractOperator, {

    type: 'asGeopolyline',
    getMenuGroup: function() {
        return this.menuGroups.dataTypes;
    },

    getIconClass: function() {
        return "pimcore_icon_geopolyline";
    },
});