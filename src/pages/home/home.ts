import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpServiceProvider} from "../../providers/http-service";
import {IntentService} from "../../providers/IntentService";
import {Subscription} from 'rxjs/Subscription';
import {LoadingController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    tabs_text = ["福利", "Android", "iOS", "前端", "App"];
    segmentModel: string = this.tabs_text[0];
    show: boolean = false;
    loader: any;
    private obj_goodsListData = [];
    image_list = ["assets/icon/animal_one.png", "assets/icon/animal_two.png", "assets/icon/animal_three.png", "assets/icon/animal_four.png", "assets/icon/animal_five.png"];
    subscription: Subscription;
    params = "all";


    constructor(public navCtrl: NavController, public servise: HttpServiceProvider, private intentService: IntentService, public loadingCtrl: LoadingController) {

        // this.loader = this.loadingCtrl.create({
        //     content: "加载中",
        //     duration: 2000
        // });
        // this.loader.present();
        // this.subscription = intentService.missionAnnounced$.subscribe(
        //     params => this.netWorkTodo(params)
        // );
    }

    private netWorkTodo(data) {
        this.loader = this.loadingCtrl.create({
            content: "加载中",
            duration: 2000
        });
        this.loader.present();
        this.params = data;
        if (data == "福利") {
            this.show = true;
        } else {
            this.show = false;
        }
        console.log("子组件收到的参数" + this.params + "data" + data);
        this.servise.getCategoryLists(this.params).subscribe(
            countries => this.onSucess(countries),
            function complete() {
                this.loader.dismiss();
            }
        );
    }

    ionViewDidEnter() {

    }

    ionViewDidLoad() {
        this.netWorkTodo("福利");

    }

    onSegmentChanged(segmentButton) {
        console.log("Segment changed to", segmentButton.value);
        this.netWorkTodo(segmentButton.value);
    }

    private onSucess(countries) {
        this.obj_goodsListData = countries;
    }

    public itemSelected(countries) {

    }

    public testIndex(index) {
        console.log(index)
    }


}
