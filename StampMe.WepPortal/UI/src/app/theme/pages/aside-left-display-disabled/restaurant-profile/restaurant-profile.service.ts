import { Injectable } from '@angular/core';
import { HttpService } from '../../../../shared/http.service';
import { ImageDataDTO } from './restaurant-profile.model';

@Injectable()
export class RestaurantService {


    constructor(private http: HttpService) {


    }

    // token will added automatically to get request header
    addImage(imageData: ImageDataDTO) {
        debugger;
        return this.http.post(`restaurant/AddImageAsync?id=` + this.http.currentUser.id, imageData).map((res) => {
            return res;
        });
    }

    getRestImages() {
        return this.http.get(`restaurant/GetImages?id=` + this.http.currentUser.id).map(x => x.json());
    }
    DeleteImageAsync(imgId) {
        return this.http.get(`restaurant/GetImages?id=` + this.http.currentUser.id + '&imgId=' + imgId).map(x => x.json());

    }

    deleteRestaurant(item) {
        return this.http.get(`restaurant/DeleteAsync?id=` + item).map(x => x);
    }


}