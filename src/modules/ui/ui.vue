<template>
  <AccountFramework>
    <form  v-validateform >
    <div class="setup-billing">
      <div class="row m-b-25">
        <h4>progress lists</h4>
      </div>
        <div class="row m-b-25 animated fadeInUp">
          <div class="fixed-background">
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
        </div>
      </div>
      <div class="row m-b-25 animated fadeInUp">
        <h4>input-ui</h4>
      </div>

        <div class="row m-b-25 animated fadeInUp">
        <div class="col-md-4">
          <label>tags input</label>
          <!--:fill="'DN-'"-->
          <tags-input :placeholder="'List facilities and separate by commas'"
                      v-bind:input.sync="createAccount.Facilitys"
                      :tagDatas="['Valley','Walnut']"></tags-input>
        </div>
        <div class="col-md-4">
          <label>default select</label>
          <array-select v-bind:input.sync="createAccount.BillingCategory" :value="selectdatasss"
                        :selectdatas="selectdatas" :filterKey="'name'"></array-select>
        </div>
        <div class="col-md-4">
          <label>search Array Select</label>
          <search-array-select v-bind:input.sync="createAccount.BillingCategory" :value="selectdds"
                               :selectdatas="selectdd" :filterKey="'name'"></search-array-select>
        </div>
      </div>
      <div class="row m-b-25 animated fadeInUp">
        <div class="col-md-4 ">
          <label>baseline input</label>
          <baseline-input :placeholder="'Account ID'" v-bind:input.sync="customerCode"
                          :name="'customerCode'" v-validate:customerCode="'required'" :isValidate="errors.has('customerCode')"></baseline-input>
        </div>
        <div class="col-md-4">
          <label >default select</label>
          <default-select v-bind:input.sync="Dept" :value="''"
                          :name="'Dept'" v-validate:Dept="'required'" :isValidate="errors.has('Dept')"
                          :selectdatas="['selectdatas','defaul']"></default-select>
        </div>
        <div class="col-md-4 ">
          <label>search default select</label>
          <search-default-select v-bind:input.sync="createAccount.Dept"
                                 :selectdatas="['selectdatas','defaul']"></search-default-select>
        </div>
      </div>
      <div class="row m-b-25 animated fadeInUp">
        <h4>button-ui</h4>
      </div>
      <div class="row m-b-25 animated fadeInUp">
        <div class="col-md-1 blue">
          <button type="button" class="btn btn-default btn-cancel" @click.stop.preven="cancel">Cancel</button>
        </div>
        <div class="col-md-2 ">
          <button type="button" class="btn btn-info btn-next" @click="onSubmit">Next Step
            <div class="down-arrow right sm-icon"></div>
          </button>
        </div>
        <div class="col-md-2 ">
          <div class="col-md-1 add-box">
            <button type="button" class="btn upload">Add</button>
          </div>
        </div>
      </div>
      <div class="row m-b-25 animated fadeInUp">
        <h4>icons</h4>
      </div>
      <div class="row m-b-25 animated fadeInUp">
        <div class="col-md-1">
          <span class="glyphicon glyphicon-ok"></span>
        </div>
        <div class="col-md-1 ">
          <i class="tick blue"></i>
        </div>
        <div class="col-md-1 ">
          <i class="tick blue"></i>
        </div>
        <div class="col-md-1">
          <div class="down-arrow up"></div>
        </div>
        <div class="col-md-1 ">
          <div class="down-arrow"></div>
        </div>
        <div class="col-md-1 ">
          <div class="down-arrow right sm-icon blue"></div>
        </div>
        <div class="col-md-1 sm-icon">
          <div class="down-arrow left"></div>
        </div>
        <div class="col-md-1 ">
          <div class="cross"></div>
        </div>
        <div class="col-md-1 ">
          <div class="loaders"></div>
        </div>
      </div>
      <div class="row m-b-25 animated fadeInUp">
        <div class="col-md-4">
          <div class="select-box">
          <select>
            <option value ="volvo">Volvo</option>
            <option value ="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <span class="mdn-bar"></span>
          </div>
        </div>
        <div class="col-md-4 ">

        </div>

      </div>
    </div>
    </form>
  </AccountFramework>
</template>
<style lang="scss" src="./ui.scss"/>
