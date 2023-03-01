import React from "react";
import { selector, useRecoilState } from "recoil";
import { weaponState } from "./App";

export const weaponDamageSelector = selector({
  key: "weaponDamageSelector",
  get: ({ get }) => {
    const weapon = get(weaponState);
    return weapon.damage;
  },
});

export default function WeaponDisplay() {
  const weaponDamage = useRecoilState(weaponDamageSelector);
  return (
    <div>
      <p>WeaponDamage: {weaponDamage}</p>
    </div>
  );
}
