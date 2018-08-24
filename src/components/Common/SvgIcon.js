import React from 'react';
import styled from 'styled-components';
import Colors from './Colors';

function getIntentColor(intent) {
  switch (intent) {
    case 'success':
      return Colors.GREEN4;
    case 'primary':
      return Colors.BLUE5;
    case 'error':
      return Colors.RED4;
    case 'warning':
      return Colors.GOLD4;

    default:
      return Colors.WHITE;
  }
}

const SvgIcon = ({ style, width, height, intent, icon }) => {
  const fillColor = getIntentColor(intent);
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        width={width ? width : '25px'}
        height={height ? height : ''}
        viewBox="0 0 611.989 611.988"
        style={{ enableBackground: 'new 0 0 611.989 611.988' }}
        xmlSpace="preserve"
      >
        <GetIcon icon={icon} fillColor={fillColor} />
      </svg>
    </div>
  );
};
export default SvgIcon;

const GetIcon = ({ icon, fillColor }) => {
  switch (icon) {
    case 'connect-signal':
      return (
        <g>
          <g>
            <g id="Wi-Fi">
              <g>
                <path
                  d="M305.994,417.769c-30.85,0-55.887,25.037-55.887,55.887s25.038,55.887,55.887,55.887s55.887-25.037,55.887-55.887     S336.843,417.769,305.994,417.769z M605.436,222.369C530.697,133.434,421.549,82.446,305.994,82.446     S81.309,133.434,6.551,222.369c-9.93,11.811-8.402,29.434,3.428,39.363c5.234,4.396,11.587,6.558,17.939,6.558     c7.973,0,15.891-3.391,21.423-9.967c64.084-76.248,157.639-119.989,256.652-119.989c99.013,0,192.568,43.741,256.651,119.971     c5.533,6.576,13.45,9.967,21.424,9.967c6.353,0,12.724-2.143,17.958-6.558C613.837,251.802,615.366,234.161,605.436,222.369z      M305.994,194.22c-82.545,0-160.489,36.419-213.879,99.926c-9.929,11.811-8.402,29.434,3.428,39.363     c5.234,4.396,11.605,6.558,17.958,6.558c7.973,0,15.891-3.391,21.405-9.967c42.716-50.838,105.086-79.993,171.089-79.993     c66.003,0,128.372,29.155,171.107,79.993c5.533,6.595,13.45,9.967,21.404,9.967c6.353,0,12.724-2.143,17.959-6.558     c11.829-9.929,13.356-27.57,3.428-39.363C466.483,230.64,388.539,194.22,305.994,194.22z M305.994,305.994     c-49.553,0-96.331,21.852-128.335,59.948c-9.93,11.811-8.402,29.434,3.428,39.363c5.234,4.396,11.605,6.557,17.958,6.557     c7.973,0,15.891-3.39,21.405-9.966c21.368-25.429,52.552-40.016,85.544-40.016s64.177,14.587,85.544,40.016     c5.533,6.595,13.45,9.966,21.405,9.966c6.353,0,12.724-2.142,17.958-6.557c11.83-9.93,13.357-27.553,3.428-39.363     C402.324,327.846,355.546,305.994,305.994,305.994z"
                  data-original="#000000"
                  className="active-path"
                  data-old_color={fillColor}
                  fill={fillColor}
                />
              </g>
            </g>
          </g>
        </g>
      );
    case 'external-link':
      return (
        <g>
          <path
            d="M266.422,0h-97.625c-9.65,0-17.5,7.851-17.5,17.5c0,9.649,7.85,17.5,17.5,17.5h55.377l-92.375,92.374		c-3.307,3.305-5.127,7.699-5.127,12.375c0,4.676,1.819,9.069,5.125,12.371c3.306,3.309,7.699,5.13,12.375,5.13		c4.674,0,9.069-1.82,12.376-5.127l92.374-92.375v55.377c0,9.649,7.851,17.5,17.5,17.5c9.649,0,17.5-7.851,17.5-17.5V17.5\		C283.922,7.851,276.071,0,266.422,0z"
            data-original="#000000"
            className="active-path"
            data-old_color={fillColor}
            fill={fillColor}
          />
          <path
            d="M201.137,253.922H30V82.785h128.711l30-30H15c-8.284,0-15,6.716-15,15v201.137c0,8.284,6.716,15,15,15h201.137c8.284,0,15-6.716,15-15V95.211l-30,30V253.922z"
            data-original="#000000"
            className="active-path"
            data-old_color={fillColor}
            fill={fillColor}
          />
        </g>
      );
  }
};
