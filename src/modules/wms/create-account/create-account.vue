<template>
  <AccountFramework>
    <form v-validateform>
      <div class="create-account">
        <div class="icon-box">
          <img src="@/assets/images/onboard/create-account.svg"/>
          <h2>Create Account</h2>
        </div>
        <div class="account-content m-b-25">

          <div class="row m-b-25 animated fadeInUp" >
            <div class="col-md-12">
              <h4>Basic Information</h4>
            </div>
          </div>
          <div class="row m-b-25 animated fadeInUp delay-0_2s">
            <div class="col-md-5">
              <div class="row m-b-25">
                <div class="col-md-6">
                  <label>Customer</label>
                  <baseline-input :placeholder="'Customer'" v-bind:input.sync="customer"
                                  :name="'customer'" v-validate:customer="'required'" :isValidate="errors.has('customer')"
                  ></baseline-input>
                </div>
                <div class="col-md-6">
                  <label>Customer Code</label>
                  <baseline-input :placeholder="'1-24 characters'"
                                  v-bind:input.sync="customerCode"
                                  :name="'customerCode'" v-validate:customerCode="'required'" :isValidate="errors.has('customerCode')"
                  ></baseline-input>
                </div>
              </div>
              <div class="row m-b-25">
                <div class="col-md-12">
                  <label>Facility</label>
                  <!--:fill="'DN-'"-->
                  <tags-input :placeholder="'List facilities and separate by commas'"
                              v-bind:input.sync="createAccount.Facilitys"
                              :tagDatas="['Valley','Walnut']"></tags-input>
                </div>

              </div>
              <div class="row">
                <div class="col-md-12">
                  <label>Description</label>
                  <baseline-input :placeholder="'Optional'"
                                  v-bind:input.sync="createAccount.description" :required="true"></baseline-input>
                </div>
              </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-4 tags">
              <label>Tags</label>
              <div class="row  p-t5">
                <div class="col-md-5">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox"> Customer
                    </label>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox"> Brand
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-5">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox"> Title
                    </label>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox"> Retailer
                    </label>
                  </div>
                </div>
              </div>
              <div class="row ">
                <div class="col-md-5">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox"> Supplier
                    </label>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox"> Tenant
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 p-t10">
                  <label> Company Logo  (optional)</label>
                </div>
                <div class="col-md-9 p-t3">
                  <div class="drop-or-browse">
                    <img src="@/assets/images/onboard/cioud.svg"/>
                    <span class="neutral-grey f-z12" style="margin: 0 5px;">Drag and drop or</span> <span
                    class="f-z12 blue">browse</span>
                  </div>
                </div>
                <div class="col-md-3 p-t8">
                  <button type="button" class="btn upload">upload</button>
                </div>
              </div>
            </div>
          </div>
          <div class="row p-t10 animated fadeInUp delay-0_4s">
            <div class="col-md-12 p-t10">
              <h4>Contact Details <span class="neutral-grey">(Optional)</span></h4>
            </div>
          </div>
          <div class="row m-b-25 p-t10 animated fadeInUp delay-0_6s">
            <div class="col-md-3">
              <label>Name</label>
              <baseline-input :placeholder="'Last, First'" v-bind:input.sync="createAccount.customer"></baseline-input>
            </div>
            <div class="col-md-2">
              <label>Phone</label>
              <baseline-input :placeholder="'+ 1 (000) 000-0000'"
                              v-bind:input.sync="createAccount.customer"></baseline-input>
            </div>
            <div class="col-md-3">
              <label>Email</label>
              <baseline-input :placeholder="'Ex: johndoe@gmail.com'"
                              v-bind:input.sync="createAccount.customer"></baseline-input>
            </div>
            <div class="col-md-2">
              <label>Dept.</label>
              <default-select v-bind:input.sync="Depts"
                              :selectdatas="['selectdatas','defaul','Last','First','Depts']"
                              :name="'Depts'" v-validate:Depts="'required'" :isValidate="errors.has('Depts')"
              ></default-select>
            </div>
            <div class="col-md-1 add-box">
              <button type="button" class="btn upload">Add</button>
            </div>
            <div class="col-md-1">
            </div>
          </div>
          <div class="row m-b-25 p-t10 animated fadeInUp delay-0_8s">
            <div class="col-md-3">
              <label>Name</label>
              <baseline-input :placeholder="'Last, First'" v-bind:input.sync="createAccount.customer"></baseline-input>
            </div>
            <div class="col-md-2">
              <label>Phone</label>
              <baseline-input :placeholder="'+ 1 (000) 000-0000'"
                              v-bind:input.sync="createAccount.customer"></baseline-input>
            </div>
            <div class="col-md-3">
              <label>Email</label>
              <baseline-input :placeholder="'Ex: johndoe@gmail.com'"
                              v-bind:input.sync="createAccount.customer"></baseline-input>
            </div>
            <div class="col-md-2">
              <label>Dept.</label>
              <default-select v-bind:input.sync="createAccount.Depts"
                              :selectdatas="selectdatas" :value="'ky0Add'" :filterKey="'name'" :syncKey="'id'"></default-select>
            </div>
            <div class="col-md-1 add-box">
              <button type="button" class="btn upload">Add</button>
            </div>
            <div class="col-md-1">
            </div>
          </div>
        </div>
        <div class="row p-t10 animated fadeInUp delay-0_8s">
          <div class="col-md-1 blue">
            <button type="button" class="btn btn-default btn-cancel" @click.stop.preven="cancel">Cancel</button>
          </div>
          <div class="col-md-9">

          </div>
          <div class="col-md-2 ">
            <button type="submit" class="btn btn-info btn-next" @click="onSubmit">Next Step
              <div class="down-arrow right sm-icon"></div>
            </button>
          </div>
        </div>
      </div>
    </form>
  </AccountFramework>
</template>
<style lang="scss" src="./create-account.scss"/>
