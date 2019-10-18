<template>
  <div class="content-wrapper" style="min-height:87vh;">
    <!-- Content Header (Page header) -->

    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <router-view class="view" keep-alive transition transition-mode="out-in"></router-view>
    </section>
  </div>
</template>

<script>
import config from "../../config";
export default {
  name: "Content",
  data() {
    return {
      _data: {},
      title: {
        elems: []
      },
      currentRoute: {}
    };
  },
  mounted() {
    this.currentRoute = this.$route;
    this.cp(this.$route.meta.title);
    this.calcuateTitle(this.$route);
  },
  created() {
    //pobiera dane o zalogowanym user
    // this.$store.dispatch("getUser");
  },
  methods: {
    cp(obj) {
      if (typeof obj === "string") {
        this.tmpTitle = obj;
      } else {
        let tmp = { bc: [], when: [] };

        if (obj.bc) {
          tmp.bc = obj.bc.map(item => Object.assign({}, item));
        }
        if (obj.when) {
          tmp.when = obj.when.map(item => Object.assign({}, item));
        }
        this.tmpTitle = tmp;
      }
    },
    calcuateTitle(to, noNeedRecurse) {
      let title = undefined;
      if (typeof this.tmpTitle === "string") {
        title = this.tmpTitle;
      } else {
        title = { ...this.tmpTitle };
      }
      let tmp = [];
      let calc = (elem, params, recurse) => {
        let obj = { title: "..." };
        let index = tmp.length;
        tmp.push(obj);
        if (typeof elem === "string") {
          obj.title = elem;
        } else {
          if (elem.asyncTitle) {
            let arr = elem.asyncTitle.split(":");
            let key = `${arr[0]}:${params[arr[1]]}:${arr[2]}`;
            if (recurse && this._data[`recurse_${key}`]) {
              let recs = this._data[`recurse_${key}`];
              tmp = tmp.filter(x => x !== obj);
              recs.forEach(x => {
                let p = {};
                p[arr[1]] = x.split(":")[1];
                tmp.push({
                  name: elem.name,
                  params: p,
                  title: this._data[x]
                });
              });
            } else if (this._data[key]) {
              obj.title = this._data[key];
            } else {
              if (arr.length === 3) {
                this.$http
                  .get(arr[0] + "/get?" + arr[1] + "=" + params[arr[1]])
                  .then(response => {
                    let strs = [];
                    if (response.body.data) {
                      let fields = arr[2].split(",");
                      fields.forEach(x => {
                        strs.push(response.body.data[x]);
                      });
                      if (recurse && response.body.data[recurse]) {
                        let path =
                          response.body.data[recurse] +
                          "." +
                          response.body.data.id;
                        let barray = title.bc.slice(0, title.bc.indexOf(elem));
                        let marray = [];
                        let aarray = title.bc.slice(
                          title.bc.indexOf(elem) + 1,
                          title.bc.length
                        );
                        path.split(".").forEach(x => {
                          marray.push({
                            title: elem.title,
                            asyncTitle: elem.asyncTitle,
                            name: elem.name,
                            to: {
                              id: x
                            },
                            params: elem.params
                          });
                        });
                        title = barray.concat(marray).concat(aarray);

                        if (marray.length) {
                          let keys = marray.map(
                            x => `${arr[0]}:${x.to.id}:${arr[2]}`
                          );
                          this._data[`recurse_${key}`] = keys;
                        }

                        if (this.tmpTitle.length != title.length) {
                          this.tmpTitle.bc = title;
                          this.calcuateTitle(to, true);
                        }
                      }
                      this._data[key] = strs.join(" ") || elem.title;
                      obj.title = this._data[key];
                    } else {
                      this._data[key] = elem.title;
                      obj.title = this._data[key];
                    }
                  });
                // .catch(() => {
                //   this._data[key] = elem.title;
                //   obj.title = this._data[key];
                // });
              }
            }
          } else {
            obj.title = elem.title;
          }
          obj.name = elem.name;

          if (elem.params) {
            obj.params = {};
            for (var item of elem.params) {
              obj.params[item] = params[item];
            }
          }
        }
      };
      if (title.bc && title.bc.length) {
        title.bc.forEach(x =>
          calc(x, x.to ? x.to : to.params, noNeedRecurse ? false : x.recurse)
        );
      }
      if (typeof title === "string") {
        calc(title, to.params);
      } else if (title) {
        if (title.when) {
          title.when.forEach(item => {
            if (item.param && to.params[item.param]) {
              let value = to.params[item.param];
              if (value === item.equals) {
                value = item.then;
              } else if (item.else) {
                value = item.else;
              }
              calc(value, to.params);
            }
          });
        }
      }
      document.title =
        (tmp[tmp.length - 1] ? tmp[tmp.length - 1].title : "") +
        " - " +
        config.current.title;
      this.title.elems = tmp;
    }
  },
  watch: {
    $route(to, from) {
      this.currentRoute = to;
      this.cp(to.meta.title);
      this.calcuateTitle(to);
      this.show = false;
      /*    if (this.$store.state.user.role == "") {
        // this.$store.dispatch("getUser");
      } */
    }
  }
};
</script>

<style>
.content-wrapper {
  padding-top: 50px;
}
</style>
