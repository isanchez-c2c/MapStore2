 /*
  * Copyright 2017, GeoSolutions Sas.
  * All rights reserved.
  *
  * This source code is licensed under the BSD-style license found in the
  * LICENSE file in the root directory of this source tree.
  */


const React = require('react');
const {Glyphicon} = require('react-bootstrap');
const ContainerDimensions = require('react-container-dimensions').default;
const enhanceTooltip = require('./enhancers/tooltip');
const Glyph = enhanceTooltip(Glyphicon);
/**
 * An icon that fits to the width of the container
 * @param {string} glyph icon glyph
 */
module.exports = ({glyph = "info-sign", tooltip}) => (<ContainerDimensions>
    { ({ width }) => (<Glyph glyph={glyph} tooltip={tooltip} style={{fontSize: width}} />)}
</ContainerDimensions>);
