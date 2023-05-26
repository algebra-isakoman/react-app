import { useEffect, useState } from "react";
import { frontendRazred } from "../data/frontendRazred";

type GenderType = "male" | "female";

export type StudentType = {
  name: string;
  lastName: string;
  age: number;
  gender: GenderType;
  height: number;
  hobby: string;
  employed: boolean;
  favoriteColor: string;
};

const Vjezba2804 = () => {
  //1. Zadatak
  //Pronađi sve osobe kojima ime počinje na slovo "M"
  //Pronađi sve osobe koje su vislje od 160 a niže od 180
  //Pronađi sve osobe kojima je najdraža boja "red"
  //Pronađi sve osobe kojima prezime završava na "c" ili "ć"

  //2. Zadatak
  //Ispiši u tablicu sve članove razreda

  //3. Zadatak
  //Obojaj tekst "favoriteColor" u boju koja je napisana npr ako je favoriteColor: red, taj tekst u tablici treba biti crvene boje

  return (
    <div className="container">
      <h1>Vjezba 2804</h1>
      <hr />
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Hobby</th>
              <th>favoriteColor</th>
            </tr>
          </thead>
          <tbody>
            {frontendRazred.map((student) => {
              return (
                <tr>
                  <td>{student.name}</td>
                  <td>{student.hobby}</td>
                  <td>{student.favoriteColor}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Vjezba2804;
