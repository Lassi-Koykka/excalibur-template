import { ImageSource, Loader, SpriteSheet, TileMap, Vector } from "excalibur";

export const Resources: { [key: string]: ImageSource } = {

}

export const loader = new Loader([...Object.values(Resources)]);
loader.backgroundColor = "#530303";
loader.suppressPlayButton = true;
