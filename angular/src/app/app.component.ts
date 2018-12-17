import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	selectedIndex: Number = 0;
	navs = [
		// {router: '/brand', name: 'Brand'},
		// {router: '/illustration', name: 'Illustration'},
		// {router: '/uiux', name: 'Ui/Ux'},
		// {router: '/about', name: 'About'},
		{router: '/bed', name: 'TeamUp 图床'},
		// {router: '/setting', name: 'Setting'},
	];

	constructor() {
	}

	ngOnInit(): void {
		this.navs.forEach((value, index) => {
			if (window.location.hash.endsWith(value.router)) {
				this.selectedIndex = index;
			}
		});
	}
}
