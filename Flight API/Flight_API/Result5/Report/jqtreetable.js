/* 
Copyright: Paul Hanlon

Released under the MIT/BSD licence which means you can do anything you want 
with it, as long as you keep this copyright notice on the page 
*/
(function(jq){
  jq.fn.jqTreeTable=function(map, options){
    var opts = jq.extend({openImg:"",shutImg:"",leafImg:"",lastOpenImg:"",lastShutImg:"",lastLeafImg:"",vertLineImg:"",blankImg:"",collapse:false,column:0,striped:false,highlight:false,state:true},options),
    mapa=[],mapb=[],tid=this.attr("id"),collarr=[],
	  stripe=function(){
      if(opts.striped){
  		  $("#"+tid+" tr:visible").filter(":even").addClass("even").end().filter(":odd").removeClass("even");
      }
	  },
    buildText = function(parno, preStr){//Recursively build up the text for the images that make it work
      var mp=mapa[parno], ro=0, pre="", pref, img;
      for (var y=0,yl=mp.length;y<yl;y++){
        ro = mp[y];
        if (mapa[ro]){//It's a parent as well. Build it's string and move on to it's children
          pre=(y==yl-1)? opts.blankImg: opts.vertLineImg;
          img=(y==yl-1)? opts.lastOpenImg: opts.openImg;
          mapb[ro-1] = preStr + '<img src="'+img+'" class="parimg" id="'+tid+ro+'">';
          pref = preStr + '<img src="'+pre+'" class="preimg">';
          arguments.callee(ro, pref);
        }else{//it's a child
          img = (y==yl-1)? opts.lastLeafImg: opts.leafImg;//It's the last child, It's child will have a blank field behind it
          mapb[ro-1] = preStr + '<img src="'+img+'" class="ttimage" id="'+tid+ro+'">';
        }
      }
    },
    expandKids = function(num, last){//Expands immediate children, and their uncollapsed children
      jq("#"+tid+num).attr("src", (last)? opts.lastOpenImg: opts.openImg);//
      for (var x=0, xl=mapa[num].length;x<xl;x++){
        var mnx = mapa[num][x];
        jq("#"+tid+mnx).parents("tr").removeClass("collapsed");
  			if (mapa[mnx] && opts.state && jq.inArray(mnx, collarr)<0){////If it is a parent and its number is not in the collapsed array
          arguments.callee(mnx,(x==xl-1));//Expand it. More intuitive way of displaying the tree
        }
      }
    },
    collapseKids = function(num, last){//Recursively collapses all children and their children and change icon
      jq("#"+tid+num).attr("src", (last)? opts.lastShutImg: opts.shutImg);
      for (var x=0, xl=mapa[num].length;x<xl;x++){
        var mnx = mapa[num][x];
        jq("#"+tid+mnx).parents("tr").addClass("collapsed");
        if (mapa[mnx]){//If it is a parent
          arguments.callee(mnx,(x==xl-1));
        }
      }
    },
  	creset = function(num, exp){//Resets the collapse array
  		var o = (exp)? collarr.splice(jq.inArray(num, collarr), 1): collarr.push(num);
      cset(tid,collarr);
  	},
  	cget = function(n){
	  	var v='',c=' '+document.cookie+';',s=c.indexOf(' '+n+'=');
	    if (s>=0) {
	    	s+=n.length+2;
	      v=(c.substring(s,c.indexOf(';',s))).split("|");
	    }
	    return v||0;
  	},
    cset = function (n,v) {
  		jq.unique(v);
	  	document.cookie = n+"="+v.join("|")+";";
	  };
    for (var x=0,xl=map.length; x<xl;x++){//From map of parents, get map of kids
      num = map[x];
      if (!mapa[num]){
        mapa[num]=[];
      }
      mapa[num].push(x+1);
    }
    buildText(0,"");
    jq("tr", this).each(function(i){//Inject the images into the column to make it work
      jq(this).children("td").eq(opts.column).prepend(mapb[i]);
      
    });
		collarr = cget(tid)||opts.collapse||collarr;
		if (collarr.length){
			cset(tid,collarr);
	    for (var y=0,yl=collarr.length;y<yl;y++){
	      collapseKids(collarr[y],($("#"+collarr[y]+ " .parimg").attr("src")==opts.lastOpenImg));
	    }
		}
    stripe();
    jq(".parimg", this).each(function(i){
      var jqt = jq(this),last;
      jqt.click(function(){
        var num = parseInt(jqt.attr("id").substr(tid.length));//Number of the row
        if (jqt.parents("tr").next().is(".collapsed")){//If the table row directly below is collapsed
          expandKids(num, (jqt.attr("src")==opts.lastShutImg));//Then expand all children not in collarr
					if(opts.state){creset(num,true);}//If state is set, store in cookie
        }else{//Collapse all and set image to opts.shutImg or opts.lastShutImg on parents
          collapseKids(num, (jqt.attr("src")==opts.lastOpenImg));
					if(opts.state){creset(num,false);}//If state is set, store in cookie
        }
        stripe();//Restripe the rows
      });
    });
    if (opts.highlight){//This is where it highlights the rows
      jq("tr", this).hover(
        function(){jq(this).addClass("over");},
        function(){jq(this).removeClass("over");}
      );
    };
  };
  return this;
})(jQuery);

// SIG // Begin signature block
// SIG // MIIi1gYJKoZIhvcNAQcCoIIixzCCIsMCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // MqtnW6RLrOSGDtOQJDHk21B4zyGIse0tnkmjewFfRKWg
// SIG // ghGzMIIFcjCCBFqgAwIBAgIQUwwjQXKrHJXnYmMubFBT
// SIG // RzANBgkqhkiG9w0BAQsFADB9MQswCQYDVQQGEwJHQjEb
// SIG // MBkGA1UECBMSR3JlYXRlciBNYW5jaGVzdGVyMRAwDgYD
// SIG // VQQHEwdTYWxmb3JkMRowGAYDVQQKExFDT01PRE8gQ0Eg
// SIG // TGltaXRlZDEjMCEGA1UEAxMaQ09NT0RPIFJTQSBDb2Rl
// SIG // IFNpZ25pbmcgQ0EwHhcNMTcwODExMDAwMDAwWhcNMTgw
// SIG // ODExMjM1OTU5WjCB2zELMAkGA1UEBhMCR0IxETAPBgNV
// SIG // BBEMCFJHMTQgMVFOMRIwEAYDVQQIDAlCZXJrc2hpcmUx
// SIG // EDAOBgNVBAcMB05ld2J1cnkxJjAkBgNVBAkMHVRoZSBM
// SIG // YXduLCAyMi0zMCBPbGQgQmF0aCBSb2FkMSIwIAYDVQQK
// SIG // DBlNaWNybyBGb2N1cyBHcm91cCBMaW1pdGVkMSMwIQYD
// SIG // VQQLDBpNaWNybyBGb2N1cyBDeWJlciBTZWN1cml0eTEi
// SIG // MCAGA1UEAwwZTWljcm8gRm9jdXMgR3JvdXAgTGltaXRl
// SIG // ZDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEB
// SIG // AMo9n3Q+TL+DdrFzRcAtVZCIc1sUF868fv9Rvw9osEN8
// SIG // YB1PU0sl1N5b4P4QkRLO+Frn96/jo+qZC1858LF2k8ox
// SIG // WUigqmexFmEEX1q8DUQa60PCSoP5fItzoodRtUNbldft
// SIG // vjcn6UAlMnGBmEKmgFMdHltVrOGlykaL8iujCTSQdrsG
// SIG // ed5XCtF00XmWRnOpcZLTYDpEXNBFE3yEbKDCp0+VGIj3
// SIG // /Tk3F7UMNTUXv1egXbKkj3DbuGqzRIYTpbIo4EbXi7e1
// SIG // ujHHnlRXVbHpVGA0k0f19jfVWQKqLpFtPcW+ws6VYBu9
// SIG // xLEr1248sYO923dwXdiGP5aPZRabna25ZC0CAwEAAaOC
// SIG // AY0wggGJMB8GA1UdIwQYMBaAFCmRYP+KTfrr+aZquM/5
// SIG // 5ku9Sc4SMB0GA1UdDgQWBBQtcP3zrPE3YX/xosT6ljoU
// SIG // 1vR9dDAOBgNVHQ8BAf8EBAMCB4AwDAYDVR0TAQH/BAIw
// SIG // ADATBgNVHSUEDDAKBggrBgEFBQcDAzARBglghkgBhvhC
// SIG // AQEEBAMCBBAwRgYDVR0gBD8wPTA7BgwrBgEEAbIxAQIB
// SIG // AwIwKzApBggrBgEFBQcCARYdaHR0cHM6Ly9zZWN1cmUu
// SIG // Y29tb2RvLm5ldC9DUFMwQwYDVR0fBDwwOjA4oDagNIYy
// SIG // aHR0cDovL2NybC5jb21vZG9jYS5jb20vQ09NT0RPUlNB
// SIG // Q29kZVNpZ25pbmdDQS5jcmwwdAYIKwYBBQUHAQEEaDBm
// SIG // MD4GCCsGAQUFBzAChjJodHRwOi8vY3J0LmNvbW9kb2Nh
// SIG // LmNvbS9DT01PRE9SU0FDb2RlU2lnbmluZ0NBLmNydDAk
// SIG // BggrBgEFBQcwAYYYaHR0cDovL29jc3AuY29tb2RvY2Eu
// SIG // Y29tMA0GCSqGSIb3DQEBCwUAA4IBAQB5YiRic/bqzlQO
// SIG // /Wty9vqid2Yb+hu8vhzpXL7BptyB1NLKjggLH+0P0Q2B
// SIG // kRRxTPmbVuohcvfq0Lb3GBW0L9PlENAeNCE4JT6FMbTF
// SIG // GSEzEtQud6uYRaAva1+9gSoqmJS0KaVsUMulzdWW4jOY
// SIG // barNB8I13T0s+rpFGey20SJPd5xvJmoT12TCup4RRUnw
// SIG // dA8gTXGkfhEj7lQBOHO3ftSk6G8gaENEiOuXNDtl2Cs0
// SIG // t7j6pnPaVamvYnCf1qK/gkowB8aDF7R2Dq0N4q7553Gm
// SIG // o8rzQQAyvEwgZZa/cgjG1eyCgAbb8zhanjlY+d0qcNIC
// SIG // omToT8Y3N+zD4t4qkXi3MIIF4DCCA8igAwIBAgIQLnyH
// SIG // zA6TSlL+lP0ct800rzANBgkqhkiG9w0BAQwFADCBhTEL
// SIG // MAkGA1UEBhMCR0IxGzAZBgNVBAgTEkdyZWF0ZXIgTWFu
// SIG // Y2hlc3RlcjEQMA4GA1UEBxMHU2FsZm9yZDEaMBgGA1UE
// SIG // ChMRQ09NT0RPIENBIExpbWl0ZWQxKzApBgNVBAMTIkNP
// SIG // TU9ETyBSU0EgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkw
// SIG // HhcNMTMwNTA5MDAwMDAwWhcNMjgwNTA4MjM1OTU5WjB9
// SIG // MQswCQYDVQQGEwJHQjEbMBkGA1UECBMSR3JlYXRlciBN
// SIG // YW5jaGVzdGVyMRAwDgYDVQQHEwdTYWxmb3JkMRowGAYD
// SIG // VQQKExFDT01PRE8gQ0EgTGltaXRlZDEjMCEGA1UEAxMa
// SIG // Q09NT0RPIFJTQSBDb2RlIFNpZ25pbmcgQ0EwggEiMA0G
// SIG // CSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCmmJBjd5E0
// SIG // f4rR3elnMRHrzB79MR2zuWJXP5O8W+OfHiQyESdrvFGR
// SIG // p8+eniWzX4GoGA8dHiAwDvthe4YJs+P9omidHCydv3Lj
// SIG // 5HWg5TUjjsmK7hoMZMfYQqF7tVIDSzqwjiNLS2PgIpQ3
// SIG // e9V5kAoUGFEs5v7BEvAcP2FhCoyi3PbDMKrNKBh1SMF5
// SIG // WgjNu4xVjPfUdpA6M0ZQc5hc9IVKaw+A3V7Wvf2pL8Al
// SIG // 9fl4141fEMJEVTyQPDFGy3CuB6kK46/BAW+QGiPiXzjb
// SIG // xghdR7ODQfAuADcUuRKqeZJSzYcPe9hiKaR+ML0btYxy
// SIG // tEjy4+gh+V5MYnmLAgaff9ULAgMBAAGjggFRMIIBTTAf
// SIG // BgNVHSMEGDAWgBS7r34CPfqm8TyEjq3uOJjs2TIy1DAd
// SIG // BgNVHQ4EFgQUKZFg/4pN+uv5pmq4z/nmS71JzhIwDgYD
// SIG // VR0PAQH/BAQDAgGGMBIGA1UdEwEB/wQIMAYBAf8CAQAw
// SIG // EwYDVR0lBAwwCgYIKwYBBQUHAwMwEQYDVR0gBAowCDAG
// SIG // BgRVHSAAMEwGA1UdHwRFMEMwQaA/oD2GO2h0dHA6Ly9j
// SIG // cmwuY29tb2RvY2EuY29tL0NPTU9ET1JTQUNlcnRpZmlj
// SIG // YXRpb25BdXRob3JpdHkuY3JsMHEGCCsGAQUFBwEBBGUw
// SIG // YzA7BggrBgEFBQcwAoYvaHR0cDovL2NydC5jb21vZG9j
// SIG // YS5jb20vQ09NT0RPUlNBQWRkVHJ1c3RDQS5jcnQwJAYI
// SIG // KwYBBQUHMAGGGGh0dHA6Ly9vY3NwLmNvbW9kb2NhLmNv
// SIG // bTANBgkqhkiG9w0BAQwFAAOCAgEAAj8COcPu+Mo7id4M
// SIG // bU2x8U6ST6/COCwEzMVjEasJY6+rotcCP8xvGcM91hoI
// SIG // lP8l2KmIpysQGuCbsQciGlEcOtTh6Qm/5iR0rx57FjFu
// SIG // I+9UUS1SAuJ1CAVM8bdR4VEAxof2bO4QRHZXavHfWGsh
// SIG // qknUfDdOvf+2dVRAGDZXZxHNTwLk/vPa/HUX2+y392UJ
// SIG // I0kfQ1eD6n4gd2HITfK7ZU2o94VFB696aSdlkClAi997
// SIG // OlE5jKgfcHmtbUIgos8MbAOMTM1zB5TnWo46BLqioXwf
// SIG // y2M6FafUFRunUkcyqfS/ZEfRqh9TTjIwc8Jvt3iCnVz/
// SIG // RrtrIh2IC/gbqjSm/Iz13X9ljIwxVzHQNuxHoc/Li6jv
// SIG // HBhYxQZ3ykubUa9MCEp6j+KjUuKOjswm5LLY5TjCqO3G
// SIG // gZw1a6lYYUoKl7RLQrZVnb6Z53BtWfhtKgx/GWBfDJqI
// SIG // bDCsUgmQFhv/K53b0CDKieoofjKOGd97SDMe12X4rsn4
// SIG // gxSTdn1k0I7OvjV9/3IxTZ+evR5sL6iPDAZQ+4wns3bJ
// SIG // 9ObXwzTijIchhmH+v1V04SF3AwpobLvkyanmz1kl63zs
// SIG // RQ55ZmjoIs2475iFTZYRPAmK0H+8KCgT+2rKVI2SXM3C
// SIG // ZZgGns5IW9S1N5NGQXwH3c/6Q++6Z2H/fUnguzB9XIDj
// SIG // 5hY5S6cwggZVMIIEPaADAgECAgphGFSGAAAAAAAkMA0G
// SIG // CSqGSIb3DQEBBQUAMH8xCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // KTAnBgNVBAMTIE1pY3Jvc29mdCBDb2RlIFZlcmlmaWNh
// SIG // dGlvbiBSb290MB4XDTExMDQxMTIyMDYyMFoXDTIxMDQx
// SIG // MTIyMTYyMFowgYUxCzAJBgNVBAYTAkdCMRswGQYDVQQI
// SIG // ExJHcmVhdGVyIE1hbmNoZXN0ZXIxEDAOBgNVBAcTB1Nh
// SIG // bGZvcmQxGjAYBgNVBAoTEUNPTU9ETyBDQSBMaW1pdGVk
// SIG // MSswKQYDVQQDEyJDT01PRE8gUlNBIENlcnRpZmljYXRp
// SIG // b24gQXV0aG9yaXR5MIICIjANBgkqhkiG9w0BAQEFAAOC
// SIG // Ag8AMIICCgKCAgEAkehUktIKVrGsDSTdxc9EZ3SZKzej
// SIG // fSNwAHG8U9/E+ioSj0t/EFa9n3Byt2F/yUsPF6c947AE
// SIG // Ye7/EZfH9IY+Cvo+XPmT5jR62RRr55yzhaCCenavcZDX
// SIG // 7P0N+pxs+t+wgvQUfvm+xKYvT3+Zf7X8Z0NyvQwA1onr
// SIG // ayzT7Y+YHBSrfuXjbvzYqOSSJNpDa2K4Vf3qwbxstovz
// SIG // Do2a5JtsaZn4eEgwRdWt4Q08RWD8MpZRJ7xnw8outmvq
// SIG // RsfHIKCxH2XeSAi6pE6p8oNGN4Tr6MyBSENnTnIqm1y9
// SIG // TBsoilwie7SrmNnu4FGDwwlGTm0+mfqVF9p8M1dBPI1R
// SIG // 7Qu2XK8sYxrfV8g/vOldxJuvRZnio1oktLqpVj3Pb6r/
// SIG // SVi+8Kj/9Lit6Tf7urj0Czr56ENCHonYhMsT8dm74Ylg
// SIG // uIwoVqwUHZwK53Hrzw7dPamWoUi9PPevtQ0iTMARgexW
// SIG // O/bTouJbt7IEIlKVgJNp6I5MZfGRAy1wdALqi2cVKWlS
// SIG // ArvX31BqVUa/oKMoYX9w0MOiqiwhqkfOKJwGRXa/ghgn
// SIG // tNWutMtQ5mv0TIZxMOmm3xaG4Nj/QN370EKIf6MzOi5c
// SIG // HkERgWPOGHFrK+ymircxXDpqR+DDeVnWIBqv8mqYqnK8
// SIG // V0rSS527EPywTEHl7R09XiidnMy/s1Hap0flhFMCAwEA
// SIG // AaOByzCByDARBgNVHSAECjAIMAYGBFUdIAAwHQYDVR0O
// SIG // BBYEFLuvfgI9+qbxPISOre44mOzZMjLUMAsGA1UdDwQE
// SIG // AwIBhjAPBgNVHRMBAf8EBTADAQH/MB8GA1UdIwQYMBaA
// SIG // FGL7CiFbf0NuEdoJVFBr9dKWcfGeMFUGA1UdHwROMEww
// SIG // SqBIoEaGRGh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9w
// SIG // a2kvY3JsL3Byb2R1Y3RzL01pY3Jvc29mdENvZGVWZXJp
// SIG // ZlJvb3QuY3JsMA0GCSqGSIb3DQEBBQUAA4ICAQCBmAeS
// SIG // /m8yX9nSS/V92XHg/fwWkgW0zmf1zEvUxxCYVPpSG0hY
// SIG // L3O/Gdk3oK0z81EFI3nZsndkiuu9w7Odt7HmN9HSWX5B
// SIG // 2Y+zFKsVd01s2kAkW7IHuFgsSwwrU1Gz3y65dqxpycLt
// SIG // ZDd7jSF6zNyfvBcoBMwlRyQqhcxW5jk5h3UYH0b2kQ+q
// SIG // RvpN5kdU4jIsdu77zb1i4ZYkKQZLDP40SukQHXTlei+V
// SIG // S8xuuv3XNV+R5FlC3vsAjgjxUVEtYiWEFQgZEYZAYdUl
// SIG // UyMsKXc4zFjTjF+8GbhmBkxjENuyrDBsFryLvNIbxgMT
// SIG // FUalUPSaloS7chA421Ga1MVTJ8u/KBWeCGs9P0zADJEc
// SIG // vxmEizdRoBmdhVXFXaVkee8Qpev0Ixzab+MufRewN3Yf
// SIG // TY3BAkEfNj4Ge8W3YC1BYlHe3eRRLafegfTD4ODpwxaA
// SIG // 3ZxJfRfPy1VjB9ZpUvSknSSNvhvJgJmHRUjLScXtcDUA
// SIG // JnynD3Uy9+0Ij/C8pWCgItUzHvvlAiyVpgf0vhTecEyO
// SIG // qX5B3qnZUGSGb5Qk96v2g5VdDUXRjCOMAwoT5A65QwMK
// SIG // Q2ezEHRG5G29Zd5FQYZwcgQLut26WR9XE5OwC+2xFEFp
// SIG // 0wkEWcc2jn22S53xIPzQ8Yu9aMo+sTHPQ9Bm9aPdr7Hc
// SIG // wxeM+jEoxz5JJ6tqGzGCEHswghB3AgEBMIGRMH0xCzAJ
// SIG // BgNVBAYTAkdCMRswGQYDVQQIExJHcmVhdGVyIE1hbmNo
// SIG // ZXN0ZXIxEDAOBgNVBAcTB1NhbGZvcmQxGjAYBgNVBAoT
// SIG // EUNPTU9ETyBDQSBMaW1pdGVkMSMwIQYDVQQDExpDT01P
// SIG // RE8gUlNBIENvZGUgU2lnbmluZyBDQQIQUwwjQXKrHJXn
// SIG // YmMubFBTRzANBglghkgBZQMEAgEFAKB8MBAGCisGAQQB
// SIG // gjcCAQwxAjAAMBkGCSqGSIb3DQEJAzEMBgorBgEEAYI3
// SIG // AgEEMBwGCisGAQQBgjcCAQsxDjAMBgorBgEEAYI3AgEV
// SIG // MC8GCSqGSIb3DQEJBDEiBCCU2R4mwLBgo8ogukIyON3l
// SIG // +jq2vp8LKlGDRJoEYnG+9TANBgkqhkiG9w0BAQEFAASC
// SIG // AQCm28//C0nboEl6I2O2zYCaN+GwGLVtJKXxdRS61LrD
// SIG // g3sTPTW+CJP3s+vgPIMVmHQ//epyh7ys5E8CCdSKyhok
// SIG // b03lzTQ7Ig632Mp5gsmJF9UfJFXneLphsh/EbiCBtJ8t
// SIG // AMoGrF62S0wIUHEWzYhSdtTrHjf9/4ClmIIJhb1htnxs
// SIG // yz8nGL3ylNMXOfOcQUTcIJDCLIJKtjRq/pQATpDAOmwh
// SIG // 7huLTIDllV8Cd7JSmAy0BKeyizOqyohNVgY5OYiqZqpx
// SIG // L7Add/qUXQ+KYy3ZjgA50WFWrxKj6p9i+IdbdxtJFU+B
// SIG // c3NTiFbfZp/y6av4YL1+PTtbG6Qb+JNXSm60oYIOPDCC
// SIG // DjgGCisGAQQBgjcDAwExgg4oMIIOJAYJKoZIhvcNAQcC
// SIG // oIIOFTCCDhECAQMxDTALBglghkgBZQMEAgEwggEOBgsq
// SIG // hkiG9w0BCRABBKCB/gSB+zCB+AIBAQYLYIZIAYb4RQEH
// SIG // FwMwMTANBglghkgBZQMEAgEFAAQgGpwoUyp2CsXQN2mS
// SIG // u4vlCCKYSSp/KQ0K19I1gXXBPcgCFBlehPbqq0DjnHVg
// SIG // A9i59e1RrEGNGA8yMDE4MDIxMzIwNTYxOFowAwIBHqCB
// SIG // hqSBgzCBgDELMAkGA1UEBhMCVVMxHTAbBgNVBAoTFFN5
// SIG // bWFudGVjIENvcnBvcmF0aW9uMR8wHQYDVQQLExZTeW1h
// SIG // bnRlYyBUcnVzdCBOZXR3b3JrMTEwLwYDVQQDEyhTeW1h
// SIG // bnRlYyBTSEEyNTYgVGltZVN0YW1waW5nIFNpZ25lciAt
// SIG // IEcyoIIKizCCBTgwggQgoAMCAQICEHsFsdRJaFFE98mJ
// SIG // 0pwZnRIwDQYJKoZIhvcNAQELBQAwgb0xCzAJBgNVBAYT
// SIG // AlVTMRcwFQYDVQQKEw5WZXJpU2lnbiwgSW5jLjEfMB0G
// SIG // A1UECxMWVmVyaVNpZ24gVHJ1c3QgTmV0d29yazE6MDgG
// SIG // A1UECxMxKGMpIDIwMDggVmVyaVNpZ24sIEluYy4gLSBG
// SIG // b3IgYXV0aG9yaXplZCB1c2Ugb25seTE4MDYGA1UEAxMv
// SIG // VmVyaVNpZ24gVW5pdmVyc2FsIFJvb3QgQ2VydGlmaWNh
// SIG // dGlvbiBBdXRob3JpdHkwHhcNMTYwMTEyMDAwMDAwWhcN
// SIG // MzEwMTExMjM1OTU5WjB3MQswCQYDVQQGEwJVUzEdMBsG
// SIG // A1UEChMUU3ltYW50ZWMgQ29ycG9yYXRpb24xHzAdBgNV
// SIG // BAsTFlN5bWFudGVjIFRydXN0IE5ldHdvcmsxKDAmBgNV
// SIG // BAMTH1N5bWFudGVjIFNIQTI1NiBUaW1lU3RhbXBpbmcg
// SIG // Q0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB
// SIG // AQC7WZ1ZVU+djHJdGoGi61XzsAGtPHGsMo8Fa4aaJwAy
// SIG // l2pNyWQUSym7wtkpuS7sY7Phzz8LVpD4Yht+66YH4t5/
// SIG // Xm1AONSRBudBfHkcy8utG7/YlZHz8O5s+K2WOS5/wSe4
// SIG // eDnFhKXt7a+Hjs6Nx23q0pi1Oh8eOZ3D9Jqo9IThxNF8
// SIG // ccYGKbQ/5IMNJsN7CD5N+Qq3M0n/yjvU9bKbS+GImRr1
// SIG // wOkzFNbfx4Dbke7+vJJXcnf0zajM/gn1kze+lYhqxdz0
// SIG // sUvUzugJkV+1hHk1inisGTKPI8EyQRtZDqk+scz51ivv
// SIG // t9jk1R1tETqS9pPJnONI7rtTDtQ2l4Z4xaE3AgMBAAGj
// SIG // ggF3MIIBczAOBgNVHQ8BAf8EBAMCAQYwEgYDVR0TAQH/
// SIG // BAgwBgEB/wIBADBmBgNVHSAEXzBdMFsGC2CGSAGG+EUB
// SIG // BxcDMEwwIwYIKwYBBQUHAgEWF2h0dHBzOi8vZC5zeW1j
// SIG // Yi5jb20vY3BzMCUGCCsGAQUFBwICMBkaF2h0dHBzOi8v
// SIG // ZC5zeW1jYi5jb20vcnBhMC4GCCsGAQUFBwEBBCIwIDAe
// SIG // BggrBgEFBQcwAYYSaHR0cDovL3Muc3ltY2QuY29tMDYG
// SIG // A1UdHwQvMC0wK6ApoCeGJWh0dHA6Ly9zLnN5bWNiLmNv
// SIG // bS91bml2ZXJzYWwtcm9vdC5jcmwwEwYDVR0lBAwwCgYI
// SIG // KwYBBQUHAwgwKAYDVR0RBCEwH6QdMBsxGTAXBgNVBAMT
// SIG // EFRpbWVTdGFtcC0yMDQ4LTMwHQYDVR0OBBYEFK9j1sqj
// SIG // ToVy4Ke8QfMpojh/gHViMB8GA1UdIwQYMBaAFLZ3+mlI
// SIG // R59TEtXC6gcydgfRlwcZMA0GCSqGSIb3DQEBCwUAA4IB
// SIG // AQB16rAt1TQZXDJF/g7h1E+meMFv1+rd3E/zociBiPen
// SIG // jxXmQCmt5l30otlWZIRxMCrdHmEXZiBWBpgZjV1x8viX
// SIG // vAn9HJFHyeLojQP7zJAv1gpsTjPs1rSTyEyQY0g5QCHE
// SIG // 3dZuiZg8tZiX6KkGtwnJj1NXQZAv4R5NTtzKEHhsQm7w
// SIG // tsX4YVxS9U72a433Snq+8839A9fZ9gOoD+NT9wp17MZ1
// SIG // LqpmhQSZt/gGV+HGDvbor9rsmxgfqrnjOgC/zoqUywHb
// SIG // nsc4uw9Sq9HjlANgCk2g/idtFDL8P5dA4b+ZidvkORS9
// SIG // 2uTTw+orWrOVWFUEfcea7CMDjYUq0v+uqWGBMIIFSzCC
// SIG // BDOgAwIBAgIQVFjyqtdB1kS8hKl7oJZS5jANBgkqhkiG
// SIG // 9w0BAQsFADB3MQswCQYDVQQGEwJVUzEdMBsGA1UEChMU
// SIG // U3ltYW50ZWMgQ29ycG9yYXRpb24xHzAdBgNVBAsTFlN5
// SIG // bWFudGVjIFRydXN0IE5ldHdvcmsxKDAmBgNVBAMTH1N5
// SIG // bWFudGVjIFNIQTI1NiBUaW1lU3RhbXBpbmcgQ0EwHhcN
// SIG // MTcwMTAyMDAwMDAwWhcNMjgwNDAxMjM1OTU5WjCBgDEL
// SIG // MAkGA1UEBhMCVVMxHTAbBgNVBAoTFFN5bWFudGVjIENv
// SIG // cnBvcmF0aW9uMR8wHQYDVQQLExZTeW1hbnRlYyBUcnVz
// SIG // dCBOZXR3b3JrMTEwLwYDVQQDEyhTeW1hbnRlYyBTSEEy
// SIG // NTYgVGltZVN0YW1waW5nIFNpZ25lciAtIEcyMIIBIjAN
// SIG // BgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmfP82AQJ
// SIG // A4b511ymk8BCfOp8Y89dAOKO88CQ348p9RjqlLeS5dew
// SIG // oHOB6OkKm0p8Af+dj6Q5pw7qRfQiDDpw7TlFi+TFG1zw
// SIG // RWhGJAVjdpsc/J5sKrFW5Yp/UnGu8jXVRiMGHM9ILR20
// SIG // zbjZdiOOHP8+v7sGXGkHpmUO+F6ufS7tTa4178nXAEL9
// SIG // KJUOn11yQgm8w9pE0u3MR4Tk/MotrFi+rveu2UQNCLfC
// SIG // d9YaQ3DRbgPeUpLEEAhx2boiVfIfvO2bnTviXh1Mg/+X
// SIG // D3sL51WDTtIN677X7K5uR7mf36XWUbwEVe3/J3BMye0q
// SIG // SxPhsblMD8kB7lVlX2kCeGbLPwIDAQABo4IBxzCCAcMw
// SIG // DAYDVR0TAQH/BAIwADBmBgNVHSAEXzBdMFsGC2CGSAGG
// SIG // +EUBBxcDMEwwIwYIKwYBBQUHAgEWF2h0dHBzOi8vZC5z
// SIG // eW1jYi5jb20vY3BzMCUGCCsGAQUFBwICMBkaF2h0dHBz
// SIG // Oi8vZC5zeW1jYi5jb20vcnBhMEAGA1UdHwQ5MDcwNaAz
// SIG // oDGGL2h0dHA6Ly90cy1jcmwud3Muc3ltYW50ZWMuY29t
// SIG // L3NoYTI1Ni10c3MtY2EuY3JsMBYGA1UdJQEB/wQMMAoG
// SIG // CCsGAQUFBwMIMA4GA1UdDwEB/wQEAwIHgDB3BggrBgEF
// SIG // BQcBAQRrMGkwKgYIKwYBBQUHMAGGHmh0dHA6Ly90cy1v
// SIG // Y3NwLndzLnN5bWFudGVjLmNvbTA7BggrBgEFBQcwAoYv
// SIG // aHR0cDovL3RzLWFpYS53cy5zeW1hbnRlYy5jb20vc2hh
// SIG // MjU2LXRzcy1jYS5jZXIwKAYDVR0RBCEwH6QdMBsxGTAX
// SIG // BgNVBAMTEFRpbWVTdGFtcC0yMDQ4LTUwHQYDVR0OBBYE
// SIG // FAm1wf6WcpcpQ5rJ4AK6rvj9L7r2MB8GA1UdIwQYMBaA
// SIG // FK9j1sqjToVy4Ke8QfMpojh/gHViMA0GCSqGSIb3DQEB
// SIG // CwUAA4IBAQAXswqI6VxaXiBrOwoVsmzFqYoyh9Ox9BxT
// SIG // roW+P5v/17y3lIW0x1J+lOi97WGy1KeZ5MPJk8E1PQvo
// SIG // aApdVpi9sSI70UR617/wbVEyitUj3zgBN/biUyt6KxGP
// SIG // t01sejMDG3xrCZQXu+TbWNQhE2Xn7NElyix1mpx//Mm7
// SIG // KmirxH20z6PJbKfZxACciQp3kfRNovsxO4Zu9uYfUAOG
// SIG // m7/LQqvmdptyWhEBisbvpW+V592uuuYiZfAYWRsRyc2A
// SIG // t9iXRx9CCPiscR+wRlOz1LLVo6tQdUgSF4Ktz+BBTzJ+
// SIG // zZUcv5GKCD2kp2cClt8kTKXQQcCCYKOKFzJL07zPpLSM
// SIG // MYICWjCCAlYCAQEwgYswdzELMAkGA1UEBhMCVVMxHTAb
// SIG // BgNVBAoTFFN5bWFudGVjIENvcnBvcmF0aW9uMR8wHQYD
// SIG // VQQLExZTeW1hbnRlYyBUcnVzdCBOZXR3b3JrMSgwJgYD
// SIG // VQQDEx9TeW1hbnRlYyBTSEEyNTYgVGltZVN0YW1waW5n
// SIG // IENBAhBUWPKq10HWRLyEqXugllLmMAsGCWCGSAFlAwQC
// SIG // AaCBpDAaBgkqhkiG9w0BCQMxDQYLKoZIhvcNAQkQAQQw
// SIG // HAYJKoZIhvcNAQkFMQ8XDTE4MDIxMzIwNTYxOFowLwYJ
// SIG // KoZIhvcNAQkEMSIEIG2CZGs2oRhhCRb84wJkXdD76GZK
// SIG // EtOw25vL5RBzhda1MDcGCyqGSIb3DQEJEAIvMSgwJjAk
// SIG // MCIEIM96wXrQR+zV/cNoIgMbEtTvB4tvK0xea6Qfj/LP
// SIG // S61nMAsGCSqGSIb3DQEBAQSCAQBvrNcHTv1G7skRGFQ4
// SIG // b8A7YFCSD7Q7Zl8+PbASstQgzUEva2TTgbvPy4YJ33WU
// SIG // SeRvynEQLYLvIemT1YYYVIQWQHt3wTF1ACe8douJIS32
// SIG // X70SjeitY0uTs/U6ea3LrrDP20HwInzkLmuEMuQAycks
// SIG // CJUZ43C6vaWey3mBhPu40cuu5/tVMiOKCmjZ+vCAKzuV
// SIG // AKvvx/Adz3k1ltBRIhBkO2+Swwidl5yIKoUf0sb3EF5H
// SIG // ERcfkB35/eibEgNRw4ib0Ocg1/c2YrZM66LnNM36N7T5
// SIG // dJvvU9MpufDY2yccckeEvMTtmVtVT95EpXLSa2fbo7zc
// SIG // wm44EmfPMzTb/KDq
// SIG // End signature block
