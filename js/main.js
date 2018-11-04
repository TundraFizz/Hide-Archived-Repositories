function Main(){
  var menu = $(".UnderlineNav-body")[0];

  var status = Cookies.get("hide-archived-repositories");

  if(status == undefined){
    status = "no";
    Cookies.set("hide-archived-repositories", "no");
  }

  if(status == "yes")
    HideArchivedRepos();

  var html = `
  <div class="hide-archived-repositories UnderlineNav-item">
    <div class="text-hide-archived-repositories">Archived</div>
    <div class="btn-hide-archived-repositories" status=${status}>
    </div>
  </div>
  `;

  $(menu).append(html);
  BindClickEvent();
}

function HideArchivedRepos(){
  $(".Label").closest("li").each(function(){
    $($(this)[0]).attr("style", "display: none !important");
  })
}

function ShowArchivedRepos(){
  $(".Label").closest("li").each(function(){
    $($(this)[0]).attr("style", "display: block !important");
  })
}

function BindClickEvent(){
  $(".hide-archived-repositories").click(function(){

    var status = $($(".btn-hide-archived-repositories")[0]).attr("status");

    if(status == "no"){
      Cookies.set("hide-archived-repositories", "yes");
      $($(".btn-hide-archived-repositories")[0]).attr("status", "yes");
      HideArchivedRepos();
    }else{
      Cookies.set("hide-archived-repositories", "no");
      $($(".btn-hide-archived-repositories")[0]).attr("status", "no");
      ShowArchivedRepos();
    }
  });
}

if(window.location.href.indexOf("tab=repositories") != 1)
  Main();
