import { Component } from "@angular/core";

@Component({
    selector :'nat-entete',
    styleUrls:['./entete.component.css'],
    templateUrl:'./entete.component.html'
}

)
export class EnteteComponent{
    public  annee =2020;
    private mois="Mai";
    
    public afficheLadate(){
        return Date();
    }

    public afficheMois(){
        return this.mois;
    }
    public augmenteAnnee(){
        this.annee=this.annee+1;
    }
}