import { StyleSheet, Dimensions, Platform } from 'react-native';

export const colorPrimary = '#e0f713';
export const colorLightest = '#fafcf2';
export const colorLight = '#c7d3e0';
export const colorShadow = '#bbbca7';
export const colorDark = '#5d5d56';
export const textSmall = 12;

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(92);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export const mapWidth = viewportWidth;
export const mapHeight = viewportHeight - 320;
