<template>
  <AccountFramework>
    <div class="setup-billing">
      <div class="icon-box">
        <img src="@/assets/images/onboard/setup-billing.svg"/>
        <h2>Setup Billing</h2>
      </div>
      <div class="account-content m-b-25 ">
        <div class="animated fadeInUp">
          <div class="row m-b-25 ">
            <div class="col-md-12">
              <h4>Billing Information</h4>
            </div>
          </div>
          <div class="row m-b-25">
            <div class="col-md-10">
              <div class="row m-b-25">
                <div class="col-md-2">
                  <label>Account ID</label>
                  <baseline-input :placeholder="'Account ID'"
                                  v-bind:input.sync="createAccount.AccountID"></baseline-input>
                </div>
                <div class="col-md-6">
                  <label>Company </label>
                  <baseline-input :placeholder="'HALLMART COLLECTIBLES'"
                                  v-bind:input.sync="createAccount.Company "></baseline-input>
                </div>
                <div class="col-md-2">
                  <label>Short Name </label>
                  <baseline-input :placeholder="'HALLMART COLLECTIBLES'"
                                  v-bind:input.sync="createAccount.ShortName "></baseline-input>
                </div>
                <div class="col-md-2">
                  <label>Category </label>
                  <baseline-input :placeholder="'Customer'"
                                  v-bind:input.sync="createAccount.Category "></baseline-input>
                </div>
              </div>
              <div class="row m-b-25">
                <div class="col-md-2">
                  <label>Pay Term</label>
                  <default-select v-bind:input.sync="createAccount.Dept" :value="'ky0Add'"
                                  :selectdatas="['selectdatas','defaul']"></default-select>
                </div>
                <div class="col-md-3">
                  <label>Bill Code Prefix </label>
                  <baseline-input :placeholder="'HALCO'" :value="'ky0Add'"
                                  v-bind:input.sync="createAccount.BillCodePrefix "></baseline-input>
                </div>
                <div class="col-md-3">
                  <label>Invoice Prefix</label>
                  <baseline-input :placeholder="'HC'" :value="'HC'"
                                  v-bind:input.sync="createAccount.ShortName "></baseline-input>
                </div>
              </div>
              <div class="row m-b-25">
                <div class="col-md-2">
                  <label>Tax ID</label>
                  <baseline-input :placeholder="'HALCO'" :value="'ky0Add'"
                                  v-bind:input.sync="createAccount.BillCodePrefix "></baseline-input>
                </div>
                <div class="col-md-6">
                  <label>Check Name </label>
                  <baseline-input :placeholder="'HALCO'" :value="'HAL_CO'"
                                  v-bind:input.sync="createAccount.BillCodePrefix "></baseline-input>
                </div>
                <div class="col-md-4">
                  <label>Statement Name</label>
                  <baseline-input :placeholder="'HC'" :value="'HC'"
                                  v-bind:input.sync="createAccount.ShortName "></baseline-input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="animated fadeInUp delay-0_2s">
          <div class="row m-b-25">
            <div class="col-md-12">
              <h4>Create Billing Rule Set</h4>
            </div>
          </div>
          <div class="row m-b-25 p-t10">
            <div class="col-md-4">
              <label>Set Name</label>
              <baseline-input :placeholder="'Last, First'" :value="'Handling'"
                              v-bind:input.sync="createAccount.customer"></baseline-input>
            </div>
            <div class="col-md-4">
              <label>Billing Category</label>
              <array-select v-bind:input.sync="createAccount.BillingCategory" :value="selectdatasss"
                            :selectdatas="selectdatas" :filterKey="'name'"></array-select>
            </div>
            <div class="col-md-2">
              <label>Item Grade</label>
              <default-select v-bind:input.sync="createAccount.Dept"
                              :selectdatas="['selectdatas','defaul']"></default-select>
            </div>
            <div class="col-md-2">
              <label>Action.</label>
              <default-select v-bind:input.sync="createAccount.Dept"
                              :selectdatas="['selectdatas','defaul']"></default-select>
            </div>
          </div>
          <div class="row m-b-25 p-t10">
            <div class="col-md-3">
              <label>Bill Frequency</label>
              <search-default-select v-bind:input.sync="createAccount.Dept" :selectdatas="['selectdatas','defaul']">
              </search-default-select>

            </div>
          </div>
        </div>
      </div>
      <div class="row p-t10 animated fadeInUp delay-0_4s">
        <div class="col-md-1 blue">
          <button type="button" class="btn btn-default btn-cancel" @click.stop.preven="cancel">Cancel</button>
        </div>
        <div class="col-md-9">

        </div>
        <div class="col-md-2 ">
          <button type="button" class="btn btn-info btn-next">Next Step
            <div class="right-arrow"></div>
          </button>
        </div>
      </div>
    </div>
  </AccountFramework>
</template>
<style lang="scss" src="./setup-billing.scss"/>
