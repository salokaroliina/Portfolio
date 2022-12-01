﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace EscapeRoom
{
    public class Katsottavat
    {
        public void LookAt(string juttu)
        {
            // Tähän on varastoitu pictureboxin nimi ja kerrotaan mitä metodia halutaan kyseisen tavaran kanssa käyttää

            var dico = new Dictionary<string, Delegate>(); // luodaan muuttujaan uusi "sanakirja".
            dico["AmpariPB"] = new Func<string, string>(Func1); // lopuissa riveissä luodaan aina uusi kohta siihen
            dico["PakastinLokerotPB"] = new Func<string, string>(Func2);
            dico["OviKiinniPB"] = new Func<string, string>(Func3);
            dico["UuniPB"] = new Func<string, string>(Func4);
            dico["UuniKelloPB"] = new Func<string, string>(Func5);
            dico["IkkunaPB"] = new Func<string, string>(Func6);
            dico["KaljaPB"] = new Func<string, string>(Func7);
            dico["MaitoPoydallaPB"] = new Func<string, string>(Func8);
            dico["LappuPB"] = new Func<string, string>(Func9);
            dico["LappuIsoPB"] = new Func<string, string>(Func10);
            dico["LaatikkoAukiPB"] = new Func<string, string>(Func11);
            dico["OviAukiPB"] = new Func<string, string>(Func12);


            // Tällä herätetään nimen mukaan haluttu metodi ja annetaan myöskin sama nimi argumentiksi
            var res = dico[juttu].DynamicInvoke(juttu);
        }
        //nämä metodit toteutetaan sen mukaan mikä halutaan kutsua
        private string Func1(string arg) 
        {
            MessageBox.Show("This... is a bucket");
            MessageBox.Show("D E A R   G O D . . .");
            MessageBox.Show("There's more!");
            MessageBox.Show("N O !");
            MessageBox.Show("It contains a number... 9");
            return null;
        }
        
        private string Func2(string arg)
        {
            MessageBox.Show("En tarvitse pakastimesta mitään");
            return null;
        }
        private string Func3(string arg)
        {
            MessageBox.Show("Ovi on lukossa. Minneköhän laitoin avaimen?");
            return null;
        }
        private string Func4(string arg)
        {
            MessageBox.Show("Uuni. Kello on pysähtynyt...");
            return null;
        }
        private string Func5(string arg)
        {
            MessageBox.Show("Uunin kello on pysähtynyt kello 2:een");
            return null;
        }
        private string Func6(string arg)
        {
            MessageBox.Show("On jo myöhä");
            return null;
        }
        private string Func7(string arg)
        {
            MessageBox.Show("Nyt ei ole oikea hetki juoda");
            return null;
        }
        private string Func8(string arg)
        {
            MessageBox.Show("Mölö 0%. Tölkki on tyhjä...");
            return null;
        }
        private string Func9(string arg)
        {
            //LappuIsoPB.Visible = true;
            return null;
        }
        private string Func10(string arg)
        {

            return null;
        }

        private string Func11(string arg)
        {
            //MessageBox.Show("Sait jo avaimen täältä, ei täällä ketää enää oo. Tää on ihan noupadi.");
            return null;
        }
        private string Func12(string arg)
        {

            return null;
        }
    }
}
