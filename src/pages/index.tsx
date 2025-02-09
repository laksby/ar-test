import {
  BrowserCompatibility,
  InstantTracker,
  Loader,
  ZapparCamera,
  ZapparCanvas,
} from '@zappar/zappar-react-three-fiber';
import { FC } from 'react';

export const IndexPage: FC = () => {
  return (
    <main className="tw:h-dvh">
      <BrowserCompatibility />
      <ZapparCanvas>
        <ZapparCamera />
        <InstantTracker placementUI="placement-only" placementCameraOffset={[0, 0, -10]}>
          <mesh position={[0, 0, -5]}>
            <sphereGeometry />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </InstantTracker>
        <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
        <Loader />
      </ZapparCanvas>
    </main>
  );
};

export default IndexPage;
