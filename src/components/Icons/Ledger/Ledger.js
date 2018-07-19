import React from 'react';

const Ledger = props => {
  const styles = {
    svg: { display: 'inline-block', verticalAlign: 'middle' },
  };

  return (
    <svg
      style={styles.svg}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 67 67"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs />
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="2.-login-(grey)" transform="translate(-847.000000, -428.000000)" fill="#FFFFFF" fill-rule="nonzero">
          <g id="Group-8" transform="translate(311.000000, 396.000000)">
            <g id="Group-6" transform="translate(501.000000, 0.000000)">
              <g id="ledger-icon" transform="translate(35.000000, 32.000000)">
                <path
                  d="M56.2167437,0 L25.4057803,0 L25.4057803,41.3502312 L66.7560559,41.3502312 L66.7560116,10.7548555 C66.7727938,4.94947977 62.0247013,0 56.2167437,0 Z"
                  id="Shape"
                  fill={props.color}
                />
                <path
                  d="M15.9444509,0 L10.7806744,0 C4.96626204,0 0,4.73131021 0,10.7755106 L0,15.9392871 L15.9444509,15.9392871 L15.9444509,0 Z"
                  id="Shape"
                  fill={props.color}
                />
                <rect
                  id="Rectangle-path"
                  x="0"
                  y="25.6252408"
                  width="15.9444509"
                  height="15.9444509"
                  fill={props.color}
                />
                <path
                  d="M50.828343,66.9741811 L55.9921195,66.9741811 C61.801368,66.9741811 66.7676301,62.2428709 66.7676301,56.1986705 L66.7676301,51.0478035 L50.828343,51.0478035 L50.828343,66.9741811 Z"
                  fill={props.color}
                  id="Shape"
                />
                <rect
                  id="Rectangle-path"
                  x="25.4057803"
                  y="51.0478035"
                  width="15.9444509"
                  height="15.9444509"
                  fill={props.color}
                />
                <path
                  d="M0,51.0478035 L0,56.21158 C0,62.0208285 4.73131021,66.9870906 10.7755106,66.9870906 L15.9392871,66.9870906 L15.9392871,51.0478035 L0,51.0478035 Z"
                  fill={props.color}
                  id="Shape"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Ledger;
