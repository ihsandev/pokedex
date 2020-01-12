import React from "react";
import { Skeleton } from "../../components";
import { LoadingMore } from "./styled";

const Loading: React.FC = () => (
  <>
    <LoadingMore>
      <Skeleton.Line width={80} height={80} />
      <Skeleton.Line height={20} />
    </LoadingMore>
    <LoadingMore>
      <Skeleton.Line width={80} height={80} />
      <Skeleton.Line height={20} />
    </LoadingMore>
    <LoadingMore>
      <Skeleton.Line width={80} height={80} />
      <Skeleton.Line height={20} />
    </LoadingMore>
    <LoadingMore>
      <Skeleton.Line width={80} height={80} />
      <Skeleton.Line height={20} />
    </LoadingMore>
    <LoadingMore>
      <Skeleton.Line width={80} height={80} />
      <Skeleton.Line height={20} />
    </LoadingMore>
  </>
);

export default Loading;
