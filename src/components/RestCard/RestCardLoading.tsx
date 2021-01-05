import React from 'react';
import ContentLoader from 'react-content-loader';

const RestCardLoading = () => (
  <ContentLoader
    className="card-loading"
    speed={2}
    width={385}
    height={500}
    viewBox="0 0 385 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="0" rx="5" ry="5" width="385" height="270" />
    <rect x="20" y="291" rx="5" ry="5" width="345" height="59" />
    <rect x="20" y="362" rx="5" ry="5" width="267" height="20" />
    <rect x="20" y="391" rx="5" ry="5" width="231" height="20" />
    <rect x="20" y="448" rx="5" ry="5" width="345" height="50" />
  </ContentLoader>
);

export default RestCardLoading;
