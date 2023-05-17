import { Suspense, ComponentType } from "react";
import Loader from "@/components/common/Loader";

const Loadable =
  <Props extends object>(Component: ComponentType<Props>) =>
  (props: Props) =>
    (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );

export default Loadable;
