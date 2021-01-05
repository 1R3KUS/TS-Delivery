import React from 'react';
import ContentLoader from 'react-content-loader';

const CardLoading = () => (
  <ContentLoader
    className="card-loading"
    speed={2}
    width={385}
    height={400}
    viewBox="0 0 385 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="-1" rx="10" ry="10" width="385" height="270" />
    <rect x="20" y="300" rx="5" ry="5" width="197" height="36" />
    <rect x="300" y="304" rx="5" ry="5" width="65" height="30" />
    <rect x="20" y="367" rx="5" ry="5" width="100" height="32" />
    <rect x="218" y="367" rx="5" ry="5" width="145" height="30" />
  </ContentLoader>
);

export default CardLoading;
