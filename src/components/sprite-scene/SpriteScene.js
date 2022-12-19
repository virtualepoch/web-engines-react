import "../sprite-scene/sprite-scene.css";

export function SpriteScene() {
  const style = {
    spriteSceneContainer: {
      width: "100%",
      height: "300px",
    },
  };

  return (
    <div className="sprite-scene-container" style={style.spriteSceneContainer}>
      <div className="monster" style={style.sprite}></div>
    </div>
  );
}
