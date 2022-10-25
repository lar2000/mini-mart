<template>
    <div>
        <widget/>
        <div class="card">
							<div class="card-header pb-0">
								<div class="d-flex justify-content-between">
									<h4 class="card-title mg-b-0">STRIPED ROWS</h4>
									
									<span>
										 {{FormShow}}
                                        <button v-if="!FormShow" class="btn btn-outline-info info me-1" @click="add_store()">ເພີ່ມ</button>
                                        <button v-if="FormShow"  class="btn btn-outline-success info me-1" @click="save_data()">ບັນທຶກ</button>
                                        <button v-if="FormShow" class="btn btn-outline-danger info" @click="close_form">ຍົກເລີກ</button>
                                    </span>

								</div>
								<p class="tx-12 tx-gray-500 mb-2">Example of Valex Striped Rows.. <a href="">Learn
										more</a></p>
							</div>
							<div class="card-body">
                                 <div class="form-store row" v-if="FormShow">
									<div class="col-md-3">
                                        ອັບໂຫຼດຮູບ
									</div>
									<div class="col-md-9">
										{{FormData}}
										<hr>
										<div class="form-group">
												<label for="exampleInputEmail1">ຊື່ລາຍການສິນຄ້າ</label>
												<input type="text" class="form-control" v-model="FormProduct.name" placeholder="ປ້ອນຊື່ສິນຄ້າ....">
											</div>
											<div class="form-group">
												<label for="exampleInputEmail1">ຈຳນວນ</label>
												<input type="number" class="form-control" v-model="FormProduct.amount" placeholder="ປ້ອນຈຳນວນ....">
											</div>

											<div class="row">
                                                 <div class="col-md-6">
													<div class="form-group">
												<label for="exampleInputEmail1">ລາຄາຊື້</label>
												<input type="text" class="form-control" v-model="FormProduct.price_buy" placeholder="ປ້ອນລາຄາຊື້....">
											</div>

												 </div>
												 <div class="col-md-6">
													<div class="form-group">
												<label for="exampleInputEmail1">ລາຄາຂາຍ</label>
												<input type="text" class="form-control" v-model="FormProduct.price_sell" placeholder="ປ້ອນລາຄາຂາຍ....">
											</div>

												 </div>
											</div>
									</div>
								</div>

								<div class="table-responsive" v-if="!FormShow">
									<table class="table table-striped mg-b-0 text-md-nowrap">
										<thead>
											<tr>
												<th>ID</th>
												<th>ຊື່ສິນຄ້າ</th>
												<th>ຈຳນວນ</th>
												<th>ລາຄາຊື້</th>
												<th>ລາຄາຂາຍ</th>
												<th>ຈັດການ</th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="list in FormData" :key="list.id">
												<th>{{list.id}}</th>
												<td>{{list.name}}</td>
												<td>{{list.amount}}</td>
												<td>{{list.price_buy}}</td>
												<td>{{list.price_sell}}</td>
												
												<div class="btn-icon-list">
													<div class="btn-icon-list">

												<button class="btn btn-info btn-icon"><i class="typcn typcn-edit"></i></button>
												<button class="btn btn-danger btn-icon"><i class="far fa-trash-alt"></i></button>
											</div>

												</div>
											</tr>
											
										</tbody>
									</table>
								</div><!-- bd -->
							</div><!-- bd -->
						</div>
    </div>
</template>

<script>
export default {
    name: 'MINIPOSReport',

    data() {
        return {
            FormShow:false,
			FormData:[{ "id": 569735, "name": "", "amount": "", "price_buy": "", "price_sell": "" }, { "id": 136368, "name": "", "amount": "", "price_buy": "", "price_sell": "" } ],
			FormProduct:{
				name:"",
				amount:"",
				price_buy:"",
				price_sell:"",
			},
        };
    },

    methods: {
        add_store(){this.FormShow = true;

		},
		save_data(){
			//ເພີ່ມຂໍ້ມູນເຂົ້າໃນ FormData
			this.FormData.push({
				id: Math.floor(Math.random()*1000000),
				name:this.FormProduct.name,
				amount:this.FormProduct.amount,
				price_buy:this.FormProduct.price_buy,
				price_sell:this.FormProduct.price_sell,

			});
			//ລ້າງຂໍ້ມູນໃນຟອມ
				this.FormProduct.name ="";
				this.FormProduct.amount = "";
				this.FormProduct.price_buy = "";
				this.FormProduct.price_sell ="";
				
            //ສະແດງລາຍການສິນຄ້າ
			this.FormShow = false;
		},
		close_form(){
			this.FormShow = false;
		}
    },
};
</script>

<style lang="scss" scoped>

</style>