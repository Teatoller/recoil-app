import "./App.css";
import { atom } from "recoil";
import { useRecoilState } from "recoil";
import { atomFamily } from "recoil";
import WeaponDisplay from "./WeaponDisplay";

export const weaponState = atom({
  key: "weaponState",
  default: {
    name: "Steven",
    damage: 50,
  },
});

export const weaponAtomFamily = atomFamily({
  key: "weaponAtomFamily",
  default: (id) => ({
    name: `Steven -${id}`,
    damage: 50,
  }),
});

function App() {
  const [weapon, setWeapon] = useRecoilState(weaponAtomFamily(" Nyundo"));

  console.log("weapon---", weapon);
  return (
    <div className="App">
      <h1>{weapon?.name}</h1>
      <p>Damage: {weapon?.damage}</p>
      <button onClick={() => setWeapon({ name: "Hurricane", damage: 70 })}>
        Upgrade Weapon
      </button>
      <WeaponDisplay />
    </div>
  );
}

export default App;
