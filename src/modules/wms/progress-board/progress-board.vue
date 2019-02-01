<template>
<section class="progress-Board">
    <article>
      <div class="row">
        <div class="col-md-6">
          <h2>Progress Board</h2>
        </div>
      </div>
        <div class="row">
          <div class="col-md-10">
          </div>
          <div class="col-md-2" style="text-align: right ">
            <div style="width:160px; display: inline-block">
              <exports-button :isExport="isExport" :exports="['exports','button']" :value="'Exports'" @select="onSelect"></exports-button>
            </div>
          </div>
        </div>
      <div class="fixed-background">
        <div class="row" style="margin-top:22px; padding-bottom: 50px; ">
          <div class="col-md-12">
            <progress-lists :label="'Create Account'" :listNumber="1">
              <div class="progress-detail">
                <div class="row">
                  <div class="col-md-12" style="padding-left: 20px; ">
                    <h5>
                      Adidas
                    </h5>
                  </div>
                  <div class="col-md-12 p-t5 " style="color:#C96C6C">
                    <div class="glyphicon-bag bag-orange">Dec 12</div>
                    Last edit 8 days ago
                  </div>
                </div>
              </div>
              <div class="progress-detail">
                <div class="row">
                  <div class="col-md-12" style="padding-left: 20px; ">
                    <h5>
                      Adidas
                    </h5>
                  </div>
                  <div class="col-md-12 p-t5 " style="color:#C96C6C">
                    <div class="glyphicon-bag bag-orange">Dec 12</div>
                    Last edit 8 days ago
                  </div>
                </div>
              </div>
            </progress-lists>
            <progress-lists :label="'Billing Setup'"></progress-lists>
            <progress-lists :label="'Process Rule Setup'"></progress-lists>
            <progress-lists :label="'Order Interface'"></progress-lists>
            <progress-lists :label="'Data Build'"></progress-lists>
            <progress-lists :label="'Test & Training'" :listNumber="2">
              <div class="progress-detail">
                <div class="row">

                  <div class="col-md-12" style="padding-left: 20px; ">
                    <h5>
                      Adidas
                    </h5>
                    Supplier
                  </div>
                  <div class="col-md-12 p-t10" style="color:#C96C6C">
                    <div class="glyphicon-bag bag-orange">Dec 12</div>
                    Last edit 8 days ago
                  </div>
                </div>
              </div>
              <div class="progress-detail">
                <div class="row">
                  <div class="col-md-12" style="padding-left: 20px; ">
                    <h5>
                      Fry’s Electronics
                    </h5>
                    Retailer
                  </div>
                  <div class="col-md-12 p-t10" style="color:#C96C6C">
                    <div class="glyphicon-bag bag-orange">Dec 12</div>
                    Last edit 8 days ago
                  </div>
                </div>
              </div>
            </progress-lists>
            <progress-lists :label="'Go-Live'"></progress-lists>
            <progress-lists :label="'Follow-Up'"></progress-lists>
            <progress-lists :label="'Complete'" :listNumber="19" :isfinish="true">
              <div class="progress-detail">
                <div class="row">
                  <div class="col-md-12 grey" style="padding-left: 20px;">
                    <h5>
                      Hallmart Collectibles
                    </h5>
                    Retailer<br>
                    Jane Doe<br>
                    janedoe@hallmartcol.com
                  </div>
                  <div class="col-md-12 p-t10" style="color:#C96C6C">
                    <div class="glyphicon-bag bag-blue">Dec 12</div>
                  </div>
                </div>
              </div>
              <div class="progress-detail">
                <div class="row">
                  <div class="col-md-12 grey" style="padding-left: 20px;p-t10 ">
                    <h5>
                      Hallmart Collectibles
                    </h5>
                    Retailer<br>
                    Jane Doe<br>
                    janedoe@hallmartcol.com
                  </div>
                  <div class="col-md-12 p-t10" style="color:#C96C6C">
                    <div class="glyphicon-bag bag-blue">Dec 12</div>
                  </div>
                </div>
              </div>
              <div class="progress-detail">
                <div class="row">
                  <div class="col-md-12 grey" style="padding-left: 20px;">
                    <h5>
                      Hallmart Collectibles
                    </h5>
                    Retailer<br>
                    Jane Doe<br>
                    janedoe@hallmartcol.com
                  </div>
                  <div class="col-md-12 p-t10" style="color:#C96C6C">
                    <div class="glyphicon-bag bag-blue">Dec 12</div>
                  </div>
                </div>
              </div>
              <div class="progress-detail">
                <div class="row">
                  <div class="col-md-12 grey" style="padding-left: 20px;  ">
                    <h5>
                      Hallmart Collectibles
                    </h5>
                    Retailer<br>
                    Jane Doe<br>
                    janedoe@hallmartcol.com
                  </div>
                  <div class="col-md-12 p-t10" style="color:#C96C6C">
                    <div class="glyphicon-bag bag-blue">Dec 12</div>
                  </div>
                </div>
              </div>
              <div class="progress-detail">
                <div class="row">
                  <div class="col-md-12 grey" style="padding-left: 20px; ">
                    <h5>
                      Hallmart Collectibles
                    </h5>
                    Retailer<br>
                    Jane Doe<br>
                    janedoe@hallmartcol.com
                  </div>
                  <div class="col-md-12 p-t10" style="color:#C96C6C">
                    <div class="glyphicon-bag bag-blue">Dec 12</div>
                  </div>
                </div>
              </div>
              <div class="particular-year">
                <div class="line-drawing"></div>
                <div class="year">2018</div>
                <div class="line-drawing"></div>
              </div>
              <div class="progress-detail">
                <div class="row">
                  <div class="col-md-12 grey" style="padding-left: 20px; ">
                    <h5>
                      Hallmart Collectibles
                    </h5>
                    Retailer<br>
                    Jane Doe<br>
                    janedoe@hallmartcol.com
                  </div>
                  <div class="col-md-12 p-t10" style="color:#C96C6C">
                    <div class="glyphicon-bag bag-blue">Dec 12</div>
                  </div>
                </div>
              </div>
              <div class="progress-detail">
                <div class="row">
                  <div class="col-md-12 grey" style="padding-left: 20px; ">
                    <h5>
                      Hallmart Collectibles
                    </h5>
                    Retailer<br>
                    Jane Doe<br>
                    janedoe@hallmartcol.com
                  </div>
                  <div class="col-md-12 p-t10" style="color:#C96C6C">
                    <div class="glyphicon-bag bag-blue">Dec 12</div>
                  </div>
                </div>
              </div>
              <div class="progress-detail">
                <div class="row">
                  <div class="col-md-12 grey" style="padding-left: 20px; padding-bottom: 15px; ">
                    <h5>
                      Hallmart Collectibles
                    </h5>
                    Retailer<br>
                    Jane Doe<br>
                    janedoe@hallmartcol.com
                  </div>
                  <div class="col-md-12 " style="color:#C96C6C">
                    <div class="glyphicon-bag bag-blue">Dec 12</div>
                  </div>
                </div>
              </div>
              <div class="progress-detail">
                <div class="row">
                  <div class="col-md-12 grey" style="padding-left: 20px; padding-bottom: 15px; ">
                    <h5>
                      Hallmart Collectibles
                    </h5>
                    Retailer<br>
                    Jane Doe<br>
                    janedoe@hallmartcol.com
                  </div>
                  <div class="col-md-12 " style="color:#C96C6C">
                    <div class="glyphicon-bag bag-blue">Dec 12</div>
                  </div>
                </div>
              </div>
              <div class="particular-year">
                <div class="line-drawing"></div>
                <div class="year">2017</div>
                <div class="line-drawing"></div>
              </div>
              <div class="progress-detail">
                <div class="row">
                  <div class="col-md-12 grey" style="padding-left: 20px; padding-bottom: 15px; ">
                    <h5>
                      Hallmart Collectibles
                    </h5>
                    Retailer<br>
                    Jane Doe<br>
                    janedoe@hallmartcol.com
                  </div>
                  <div class="col-md-12 " style="color:#C96C6C">
                    <div class="glyphicon-bag bag-blue">Dec 12</div>
                  </div>
                </div>
              </div>
              <div class="progress-detail">
                <div class="row">
                  <div class="col-md-12 grey" style="padding-left: 20px; padding-bottom: 15px; ">
                    <h5>
                      Hallmart Collectibles
                    </h5>
                    Retailer<br>
                    Jane Doe<br>
                    janedoe@hallmartcol.com
                  </div>
                  <div class="col-md-12 " style="color:#C96C6C">
                    <div class="glyphicon-bag bag-blue">Dec 12</div>
                  </div>
                </div>
              </div>
              <div class="progress-detail">
                <div class="row">
                  <div class="col-md-12 grey" style="padding-left: 20px; padding-bottom: 15px; ">
                    <h5>
                      Hallmart Collectibles
                    </h5>
                    Retailer<br>
                    Jane Doe<br>
                    janedoe@hallmartcol.com
                  </div>
                  <div class="col-md-12 " style="color:#C96C6C">
                    <div class="glyphicon-bag bag-blue">Dec 12</div>
                  </div>
                </div>
              </div>
              <div class="progress-detail">
                <div class="row">
                  <div class="col-md-12 grey" style="padding-left: 20px; padding-bottom: 15px; ">
                    <h5>
                      Hallmart Collectibles
                    </h5>
                    Retailer<br>
                    Jane Doe<br>
                    janedoe@hallmartcol.com
                  </div>
                  <div class="col-md-12 " style="color:#C96C6C">
                    <div class="glyphicon-bag bag-blue">Dec 12</div>
                  </div>
                </div>
              </div>
              <div class="progress-detail">
                <div class="row">
                  <div class="col-md-12 grey" style="padding-left: 20px; padding-bottom: 15px; ">
                    <h5>
                      Hallmart Collectibles
                    </h5>
                    Retailer<br>
                    Jane Doe<br>
                    janedoe@hallmartcol.com
                  </div>
                  <div class="col-md-12 " style="color:#C96C6C">
                    <div class="glyphicon-bag bag-blue">Dec 12</div>
                  </div>
                </div>
              </div>
            </progress-lists>
          </div>
        </div>
      </div>
    </article>

</section>

</template>
<style lang="scss" src="./progress-board.scss"/>
