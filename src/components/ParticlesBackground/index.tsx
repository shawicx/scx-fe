/*
 * @Author: shawicx d35f3153@proton.me
 * @Date: 2025-02-12 20:57:58
 * @LastEditors: shawicx d35f3153@proton.me
 * @LastEditTime: 2025-03-01 15:35:00
 * @Description: 粒子效果背景
 */
import { useEffect, useMemo, useState } from 'react';

import Particles, { initParticlesEngine, IParticlesProps } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { ParticlesOption } from "./option.ts";

import './index.scss';

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = () => Promise.resolve()

  const options = useMemo(
    () => ParticlesOption,
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        className="particles-background"
        particlesLoaded={particlesLoaded}
        options={options as IParticlesProps['options']}
      />
    );
  }

  return <></>;
};

export default ParticlesBackground;