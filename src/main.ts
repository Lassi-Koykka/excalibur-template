import {Engine, Color, DisplayMode } from 'excalibur';
import { loader } from './resources';
import './style.css'
import './types.d'

export const width = 800;
export const height = 600;

const game = new Engine({
  width,
  height,
  backgroundColor: Color.Gray,
  displayMode: DisplayMode.FitScreen
});

// globalThis.engine = engine
// game.showDebug(true);

// Example player addition to scene
// const player = new Player();
// player.body.collisionType = CollisionType.Fixed;
// game.currentScene.camera.strategy.lockToActor(player);
// game.add(player);


  await game.start(loader);
