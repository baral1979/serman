'use strict';

angular.module('serman')
  .service('Services', function($http) {

    this.submitAction = function (action) {
      return $http({
        method: 'POST',
        data: action,
        url: '/api/services'
      });
    };

    this.getServices = function getServices() {

      return $http({
        method: 'GET',
        datatype: 'jsonp',
        url: '/api/services'
      });

      return [{
        "ConnectionStringFile": "csPosteAlex.config",
        "ShortName": " Information Catalog ",
        "Id": "1867a672-3b43-4784-8367-3a6a159f8f95",
        "Group": "ICS",
        "GroupColor": "#8FC9D0",
        "Name": "Familiprix Information Catalog Service",
        "Description": "Generic catalog information about Familiprix like as branch list and media data.",
        "LiveUpdate": {
          "Enabled": false,
          "Source": ""
        },
        "Clients": [{
          "Contract": "Familiprix.SiteInternet.Common.Services.IPharmacyService",
          "Endpoint": "net.tcp://10.100.200.63:55100/SiteWebSvc/Pharmacy",
          "SuggestedEndpoints": [],
          "IsOk": false,
          "StatusMessages": "No service implements this contract"
        }, {
          "Contract": "Familiprix.SiteInternet.Common.Services.IGenericService",
          "Endpoint": "net.tcp://10.100.200.63:55100/SiteWebSvc/Generic",
          "SuggestedEndpoints": [],
          "IsOk": false,
          "StatusMessages": "No service implements this contract"
        }, {
          "Contract": "Familiprix.SiteInternet.Common.Services.IFidelityCardService",
          "Endpoint": "net.tcp://10.100.200.63:55100/SiteWebSvc/FidelityCard",
          "SuggestedEndpoints": [],
          "IsOk": false,
          "StatusMessages": "No service implements this contract"
        }, {
          "Contract": "Familiprix.SiteInternet.Common.Services.IJobsService",
          "Endpoint": "net.tcp://10.100.200.63:55100/SiteWebSvc/Job",
          "SuggestedEndpoints": [],
          "IsOk": false,
          "StatusMessages": "No service implements this contract"
        }, {
          "Contract": "Familiprix.PPS.SDK.Types.Services.IFppsPatientService",
          "Endpoint": "http://localhost:60140/PPS",
          "SuggestedEndpoints": [],
          "IsOk": false,
          "StatusMessages": "No service implements this contract"
        }],
        "Services": [{
          "Contract": "Familiprix.ICS.Common.Services.IFicsServiceV1",
          "Endpoint": "http://localhost:60501/ICS/V1"
        }, {
          "Contract": "Familiprix.ICS.Common.Services.IGenericServiceV2",
          "Endpoint": "net.tcp://localhost:60502/ICS/V2/Generic"
        }, {
          "Contract": "Familiprix.ICS.Common.Services.IPharmacyServiceV2",
          "Endpoint": "net.tcp://localhost:60502/ICS/V2/Pharmacy"
        }, {
          "Contract": "Familiprix.ICS.Common.Services.IFidelityCardServiceV2",
          "Endpoint": "net.tcp://localhost:60502/ICS/V2/FidelityCard"
        }, {
          "Contract": "Familiprix.ICS.Common.Services.IJobsServiceV2",
          "Endpoint": "net.tcp://localhost:60502/ICS/V2/Job"
        }, {
          "Contract": "Familiprix.ICS.Common.Services.IFicsServiceV3",
          "Endpoint": "http://localhost:60503/ICS/V3"
        }, {
          "Contract": "Familiprix.ICS.Common.Services.IFicsAdminService",
          "Endpoint": "http://localhost:60504/ICS"
        }],
        "Path": "C:\\FAM_APP\\Familiprix.ICS.Service\\Familiprix.ICS.Service.exe",
        "Accronyme": "FICS",
        "FileDate": "2016-09-26T11:48:23.0171087-04:00",
        "Status": "Stopped"
      }, {
        "ConnectionStringFile": "",
        "ShortName": " Information Catalog  (Proxy)",
        "Id": "e30577a8-b428-4fa9-8f5d-c2b4e7d147f6",
        "Group": "ICS",
        "GroupColor": "#8FC9D0",
        "Name": "Familiprix Information Catalog Service (Proxy)",
        "Description": "Generic catalog information about Familiprix like as branch list and media data.",
        "LiveUpdate": {
          "Enabled": false,
          "Source": ""
        },
        "Clients": [{
          "Contract": "Familiprix.ICS.Common.Services.IFicsServiceV1",
          "Endpoint": "http://localhost:60501/ICS/V1",
          "SuggestedEndpoints": ["http://localhost:60511/ICS/V1"],
          "IsOk": false,
          "StatusMessages": ""
        }, {
          "Contract": "Familiprix.ICS.Common.Services.IGenericServiceV2",
          "Endpoint": "net.tcp://localhost:60502/ICS/V2/Generic",
          "SuggestedEndpoints": ["net.tcp://localhost:60512/ICS/V2/Generic"],
          "IsOk": false,
          "StatusMessages": ""
        }, {
          "Contract": "Familiprix.ICS.Common.Services.IPharmacyServiceV2",
          "Endpoint": "net.tcp://localhost:60502/ICS/V2/Pharmacy",
          "SuggestedEndpoints": ["net.tcp://localhost:60512/ICS/V2/Pharmacy"],
          "IsOk": false,
          "StatusMessages": ""
        }, {
          "Contract": "Familiprix.ICS.Common.Services.IFidelityCardServiceV2",
          "Endpoint": "net.tcp://localhost:60502/ICS/V2/FidelityCard",
          "SuggestedEndpoints": ["net.tcp://localhost:60512/ICS/V2/FidelityCard"],
          "IsOk": false,
          "StatusMessages": ""
        }, {
          "Contract": "Familiprix.ICS.Common.Services.IJobsServiceV2",
          "Endpoint": "net.tcp://localhost:60502/ICS/V2/Job",
          "SuggestedEndpoints": ["net.tcp://localhost:60512/ICS/V2/Job"],
          "IsOk": false,
          "StatusMessages": ""
        }, {
          "Contract": "Familiprix.ICS.Common.Services.IFicsServiceV3",
          "Endpoint": "http://localhost:60503/ICS/V3",
          "SuggestedEndpoints": ["http://localhost:60513/ICS/V3"],
          "IsOk": false,
          "StatusMessages": ""
        }],
        "Services": [{
          "Contract": "Familiprix.ICS.Common.Services.IFicsServiceV1",
          "Endpoint": "http://localhost:60511/ICS/V1"
        }, {
          "Contract": "Familiprix.ICS.Common.Services.IGenericServiceV2",
          "Endpoint": "net.tcp://localhost:60512/ICS/V2/Generic"
        }, {
          "Contract": "Familiprix.ICS.Common.Services.IPharmacyServiceV2",
          "Endpoint": "net.tcp://localhost:60512/ICS/V2/Pharmacy"
        }, {
          "Contract": "Familiprix.ICS.Common.Services.IFidelityCardServiceV2",
          "Endpoint": "net.tcp://localhost:60512/ICS/V2/FidelityCard"
        }, {
          "Contract": "Familiprix.ICS.Common.Services.IJobsServiceV2",
          "Endpoint": "net.tcp://localhost:60512/ICS/V2/Job"
        }, {
          "Contract": "Familiprix.ICS.Common.Services.IFicsServiceV3",
          "Endpoint": "http://localhost:60513/ICS/V3"
        }],
        "Path": "C:\\FAM_APP\\Familiprix.ICS.ServiceProxy\\Familiprix.ICS.ServiceProxy.exe",
        "Accronyme": "FICS (Proxy)",
        "FileDate": "2016-09-26T11:48:29.0404532-04:00",
        "Status": "Stopped"
      }, {
        "ConnectionStringFile": "csPosteAlex.config",
        "ShortName": " Notification ",
        "Id": "f497256e-1625-4c98-a6b5-08d09bdc85ae",
        "Group": "FNS",
        "GroupColor": "#009FE3",
        "Name": "Familiprix Notification Service",
        "Description": "Auxiliary service of F-PPS that manages and process the message notifications for mobility, email, sms, etc.",
        "LiveUpdate": {
          "Enabled": false,
          "Source": ""
        },
        "Clients": [{
          "Contract": "Familiprix.ICS.Common.Services.IFicsServiceV3",
          "Endpoint": "http://10.100.231.107:60503/ICS/V3",
          "SuggestedEndpoints": [],
          "IsOk": false,
          "StatusMessages": "No service implements this contract"
        }],
        "Services": [{
          "Contract": "Familiprix.NS.Common.Services.IFnsPharma01Service",
          "Endpoint": "http://localhost:60250/NS"
        }, {
          "Contract": "Familiprix.NS.Common.Services.IFnsPharma01TDDService",
          "Endpoint": "http://localhost:60251/NS"
        }, {
          "Contract": "Familiprix.NS.Common.Services.IFnsPharma01DCService",
          "Endpoint": "net.tcp://localhost:60252/NS"
        }, {
          "Contract": "Familiprix.NS.Common.Services.IFnsTwilioService",
          "Endpoint": "http://localhost:46001/NS"
        }],
        "Path": "C:\\FAM_APP\\Familiprix.NS.Service\\Familiprix.NS.Service.exe",
        "Accronyme": "FNS",
        "FileDate": "2016-09-22T09:40:13.0920769-04:00",
        "Status": "Stopped"
      }, {
        "ConnectionStringFile": "csPosteAlex.config",
        "ShortName": " Notification  (2)",
        "Id": "43361de8-849d-4659-8c87-cb7a209e7003",
        "Group": "FNS",
        "GroupColor": "#009FE3",
        "Name": "Familiprix Notification Service (2)",
        "Description": "Service responsible to handle inbound and outbound communications (SMS, Email, Push)",
        "LiveUpdate": {
          "Enabled": false,
          "Source": ""
        },
        "Clients": [],
        "Services": [{
          "Contract": "Familiprix.NS.Common.Services.IFnsInboundNotificationService",
          "Endpoint": "http://localhost:60253/NS"
        }, {
          "Contract": "Familiprix.NS.SDK.Types.Services.IFnsNotificationService",
          "Endpoint": "http://localhost:60254/NS"
        }, {
          "Contract": "Familiprix.NS.Common.Services.IFnsAdminService",
          "Endpoint": "http://localhost:60255/NS"
        }],
        "Path": "C:\\FAM_APP\\Familiprix.NS2.Service\\Familiprix.NS.Service.exe",
        "Accronyme": "FNS (2)",
        "FileDate": "2017-04-18T16:01:22.1709108-04:00",
        "Status": "Running"
      }, {
        "ConnectionStringFile": "",
        "ShortName": " Notification  (Proxy)",
        "Id": "3420acab-4083-4245-ae4a-28f43a93fa2c",
        "Group": "FNS",
        "GroupColor": "#009FE3",
        "Name": "Familiprix Notification Service (Proxy)",
        "Description": "Auxiliary service of F-PPS that manages and process the message notifications for mobility, email, sms, etc.",
        "LiveUpdate": {
          "Enabled": true,
          "Source": "C:\\Familiprix\\FNS2\\trunk\\ServiceProxy\\bin\\Debug"
        },
        "Clients": [{
          "Contract": "Familiprix.NS.Common.Services.IFnsInboundNotificationService",
          "Endpoint": "http://localhost:60253/NS",
          "SuggestedEndpoints": ["http://localhost:60153/NS"],
          "IsOk": false,
          "StatusMessages": ""
        }, {
          "Contract": "Familiprix.NS.SDK.Types.Services.IFnsNotificationService",
          "Endpoint": "http://localhost:60254/NS",
          "SuggestedEndpoints": ["http://localhost:60154/NS"],
          "IsOk": false,
          "StatusMessages": ""
        }],
        "Services": [{
          "Contract": "Familiprix.NS.Common.Services.IFnsInboundNotificationService",
          "Endpoint": "http://localhost:60153/NS"
        }, {
          "Contract": "Familiprix.NS.SDK.Types.Services.IFnsNotificationService",
          "Endpoint": "http://localhost:60154/NS"
        }],
        "Path": "C:\\FAM_APP\\Familiprix.NS.ServiceProxy\\Familiprix.NS.ServiceProxy.exe",
        "Accronyme": "FNS (Proxy)",
        "FileDate": "2017-02-17T12:21:04.7007079-05:00",
        "Status": "Stopped"
      }, {
        "ConnectionStringFile": "csPosteAlex.config",
        "ShortName": " Priorx Integration ",
        "Id": "3ec8b497-0ec4-4fae-9857-2b10c8ccfca4",
        "Group": "N/A",
        "GroupColor": "orange",
        "Name": "Familiprix Priorx Integration Service",
        "Description": "External data integration service for Priorx.",
        "LiveUpdate": {
          "Enabled": false,
          "Source": ""
        },
        "Clients": [{
          "Contract": "CFPServiceReference.IInventoryService",
          "Endpoint": "http://svcpilulier.familiprix.com/InventoryService.svc",
          "SuggestedEndpoints": [],
          "IsOk": false,
          "StatusMessages": "No service implements this contract"
        }],
        "Services": [{
          "Contract": "Familiprix.PIS.Common.Services.IFpisService",
          "Endpoint": "net.tcp://localhost:60999/PIS"
        }],
        "Path": "C:\\Familiprix\\FPIS\\trunk\\Service\\bin\\Debug\\Familiprix.PIS.Service.exe",
        "Accronyme": "FPIS",
        "FileDate": "2015-12-09T07:50:23.3714437-05:00",
        "Status": "Stopped"
      }, {
        "ConnectionStringFile": "csPosteAlex.config",
        "ShortName": " Patient Provider Notification Agent ",
        "Id": "ced4a4bc-08c7-48db-a44e-e08fddcf6e38",
        "Group": "PPS",
        "GroupColor": "#662482",
        "Name": "Familiprix Patient Provider Notification Agent Service",
        "Description": "Notificators process that send notifications to patients",
        "LiveUpdate": {
          "Enabled": false,
          "Source": ""
        },
        "Clients": [],
        "Services": [],
        "Path": "C:\\FAM_APP\\Familiprix.PPS.Notification.Agent.Service\\Familiprix.PPS.Notification.Agent.Service.exe",
        "Accronyme": "FPPNAS",
        "FileDate": "2017-04-25T02:09:41.6519439-04:00",
        "Status": "Stopped"
      }, {
        "ConnectionStringFile": "csPosteAlex.config",
        "ShortName": " Patient Provider Notification ",
        "Id": "fd25ba72-95fe-4329-a54d-f53b79976504",
        "Group": "PPS",
        "GroupColor": "#662482",
        "Name": "Familiprix Patient Provider Notification Service",
        "Description": "Notification sent to patients users",
        "LiveUpdate": {
          "Enabled": false,
          "Source": ""
        },
        "Clients": [{
          "Contract": "Familiprix.NS.Common.Services.IFnsPharma01Service",
          "Endpoint": "http://localhost:60250/PPS",
          "SuggestedEndpoints": [],
          "IsOk": false,
          "StatusMessages": "No service implements this contract"
        }],
        "Services": [{
          "Contract": "Familiprix.PPS.Common.Services.IFppsNotificationService",
          "Endpoint": "http://localhost:60249/PPSNS"
        }],
        "Path": "C:\\FAM_APP\\Familiprix.PPS.Notification.Service\\Familiprix.PPS.Notification.Service.exe",
        "Accronyme": "FPPNS",
        "FileDate": "2017-01-12T08:56:08.92585-05:00",
        "Status": "Stopped"
      }, {
        "ConnectionStringFile": "csPosteAlex.config",
        "ShortName": " Patient Provider Processing ",
        "Id": "c256a5da-a7ed-4bbd-b606-fb6249deb6b7",
        "Group": "PPS",
        "GroupColor": "#662482",
        "Name": "Familiprix Patient Provider Processing Service",
        "Description": "Service utilisé pour traiter des tâches exigeantes en ressources systèmes",
        "LiveUpdate": {
          "Enabled": false,
          "Source": ""
        },
        "Clients": [],
        "Services": [{
          "Contract": "Familiprix.PPS.SDK.Types.Services.IFppsProcessingService",
          "Endpoint": "http://localhost:59141/PPSPR"
        }],
        "Path": "C:\\FAM_APP\\Familiprix.PPS.Processing.Service\\Familiprix.PPS.Processing.Service.exe",
        "Accronyme": "FPPPS",
        "FileDate": "2016-09-23T09:56:55.6355892-04:00",
        "Status": "Stopped"
      }, {
        "ConnectionStringFile": "",
        "ShortName": " Patient Provider Processing  (Proxy)",
        "Id": "8a5636df-7ea9-481a-aee3-6dc8b863a1f9",
        "Group": "PPS",
        "GroupColor": "#662482",
        "Name": "Familiprix Patient Provider Processing Service (Proxy)",
        "Description": "Service utilisé pour traiter des tâches exigeantes en ressources systèmes",
        "LiveUpdate": {
          "Enabled": false,
          "Source": ""
        },
        "Clients": [{
          "Contract": "Familiprix.PPS.SDK.Types.Services.IFppsProcessingService",
          "Endpoint": "http://localhost:59141/PPSPR",
          "SuggestedEndpoints": ["http://localhost:59151/PPSPR"],
          "IsOk": false,
          "StatusMessages": ""
        }],
        "Services": [{
          "Contract": "Familiprix.PPS.SDK.Types.Services.IFppsProcessingService",
          "Endpoint": "http://localhost:59151/PPSPR"
        }],
        "Path": "C:\\FAM_APP\\Familiprix.PPS.Processing.ServiceProxy\\Familiprix.PPS.Processing.ServiceProxy.exe",
        "Accronyme": "FPPPS (Proxy)",
        "FileDate": "2016-09-23T09:32:48.9968462-04:00",
        "Status": "Running"
      }, {
        "ConnectionStringFile": "csPosteAlex.config",
        "ShortName": " Patient Provider Residence ",
        "Id": "09beebd1-9cde-4cf6-bccc-f4c7071bfb47",
        "Group": "PPS",
        "GroupColor": "#662482",
        "Name": "Familiprix Patient Provider Residence Service",
        "Description": "Provided services to patients for external residence systems.",
        "LiveUpdate": {
          "Enabled": false,
          "Source": ""
        },
        "Clients": [{
          "Contract": "Familiprix.PPS.Common.Services.IPriorxResidenceService",
          "Endpoint": null,
          "SuggestedEndpoints": [],
          "IsOk": false,
          "StatusMessages": "No service implements this contract"
        }, {
          "Contract": "Familiprix.PPS.PriorxStubService.Services.IPriorxTDDService",
          "Endpoint": null,
          "SuggestedEndpoints": [],
          "IsOk": false,
          "StatusMessages": "No service implements this contract"
        }],
        "Services": [{
          "Contract": "Familiprix.PPS.SDK.Types.Services.IFppsResidenceService",
          "Endpoint": "http://localhost:60180/PPSRS"
        }, {
          "Contract": "Familiprix.PPS.Common.Services.IFppsResidencePharmacistService",
          "Endpoint": "http://localhost:60181/PPSRS"
        }],
        "Path": "C:\\FAM_APP\\Familiprix.PPS.Residence.Service\\Familiprix.PPS.Residence.Service.exe",
        "Accronyme": "FPPRS",
        "FileDate": "2015-08-21T10:12:48.8444637-04:00",
        "Status": "Stopped"
      }, {
        "ConnectionStringFile": "",
        "ShortName": " Patient Provider Residence  (Proxy)",
        "Id": "8ad5086f-e283-4b95-85ea-0ad4ac462aca",
        "Group": "PPS",
        "GroupColor": "#662482",
        "Name": "Familiprix Patient Provider Residence Service (Proxy)",
        "Description": "Provided services to patients for external residence systems.",
        "LiveUpdate": {
          "Enabled": false,
          "Source": ""
        },
        "Clients": [{
          "Contract": "Familiprix.PPS.SDK.Types.Services.IFppsResidenceService",
          "Endpoint": "http://localhost:60180/PPSRS",
          "SuggestedEndpoints": ["http://localhost:60193/PPSRS"],
          "IsOk": false,
          "StatusMessages": ""
        }, {
          "Contract": "Familiprix.PPS.Common.Services.IFppsResidencePharmacistService",
          "Endpoint": "http://localhost:60181/PPSRS",
          "SuggestedEndpoints": ["http://localhost:60194/PPSRS"],
          "IsOk": false,
          "StatusMessages": ""
        }],
        "Services": [{
          "Contract": "Familiprix.PPS.SDK.Types.Services.IFppsResidenceService",
          "Endpoint": "http://localhost:60193/PPSRS"
        }, {
          "Contract": "Familiprix.PPS.Common.Services.IFppsResidencePharmacistService",
          "Endpoint": "http://localhost:60194/PPSRS"
        }],
        "Path": "C:\\FAM_APP\\Familiprix.PPS.Residence.ServiceProxy\\Familiprix.PPS.Residence.ServiceProxy.exe",
        "Accronyme": "FPPRS (Proxy)",
        "FileDate": "2015-08-21T10:12:46.1576293-04:00",
        "Status": "Stopped"
      }, {
        "ConnectionStringFile": "csPosteAlex.config",
        "ShortName": " Patient Provider ",
        "Id": "26c89530-da46-426f-83ac-08782c399626",
        "Group": "PPS",
        "GroupColor": "#662482",
        "Name": "Familiprix Patient Provider Service",
        "Description": "Provided services to patients for external systems.",
        "LiveUpdate": {
          "Enabled": false,
          "Source": ""
        },
        "Clients": [{
          "Contract": "Familiprix.ICS.Common.Services.IFicsServiceV3",
          "Endpoint": "http://localhost:60503/ICS/V3",
          "SuggestedEndpoints": [],
          "IsOk": false,
          "StatusMessages": "No service implements this contract"
        }, {
          "Contract": "Familiprix.PPS.Common.Services.IPriorxService2",
          "Endpoint": null,
          "SuggestedEndpoints": [],
          "IsOk": false,
          "StatusMessages": "No service implements this contract"
        }, {
          "Contract": "Familiprix.FPS.Common.Services.IFaxMonitorService",
          "Endpoint": null,
          "SuggestedEndpoints": [],
          "IsOk": false,
          "StatusMessages": "No service implements this contract"
        }, {
          "Contract": "Familiprix.NS.Common.Services.IFnsPharma01Service",
          "Endpoint": "http://localhost:60250/NS",
          "SuggestedEndpoints": [],
          "IsOk": false,
          "StatusMessages": "No service implements this contract"
        }, {
          "Contract": "Familiprix.NS.Common.Services.IFnsPharma01DCService",
          "Endpoint": "net.tcp://localhost:60252/NS",
          "SuggestedEndpoints": [],
          "IsOk": false,
          "StatusMessages": "No service implements this contract"
        }, {
          "Contract": "Familiprix.PPS.Common.Services.IFppsNotificationService",
          "Endpoint": "http://localhost:60249/PPSNS",
          "SuggestedEndpoints": [],
          "IsOk": false,
          "StatusMessages": "No service implements this contract"
        }],
        "Services": [{
          "Contract": "Familiprix.PPS.Common.Services.IFppsAdminService",
          "Endpoint": "http://localhost:60223/PPS"
        }, {
          "Contract": "Familiprix.PPS.Common.Services.IFppsPharmacistService",
          "Endpoint": "http://localhost:60241/PPS"
        }, {
          "Contract": "Familiprix.PPS.SDK.Types.Services.IFppsPatientService",
          "Endpoint": "http://localhost:60240/PPS"
        }, {
          "Contract": "Familiprix.PPS.SDK.Types.Services.IFppsNotificationService",
          "Endpoint": "http://localhost:60242/PPS"
        }, {
          "Contract": "Familiprix.FUAS.SDK.Types.Services.IFuasSessionService",
          "Endpoint": "http://localhost:60257/PPS"
        }],
        "Path": "C:\\FAM_APP\\Familiprix.PPS.Service\\Familiprix.PPS.Service.exe",
        "Accronyme": "FPPS",
        "FileDate": "2014-10-10T14:39:05.3145749-04:00",
        "Status": "Stopped"
      }, {
        "ConnectionStringFile": "",
        "ShortName": " Patient Provider  (Proxy)",
        "Id": "692af1aa-70ca-42df-940f-058d1545af25",
        "Group": "PPS",
        "GroupColor": "#662482",
        "Name": "Familiprix Patient Provider Service (Proxy)",
        "Description": "Provided services to patients for external systems.",
        "LiveUpdate": {
          "Enabled": false,
          "Source": ""
        },
        "Clients": [{
          "Contract": "Familiprix.PPS.SDK.Types.Services.IFppsPatientService",
          "Endpoint": "http://localhost:60240/PPS",
          "SuggestedEndpoints": ["http://localhost:60140/PPS"],
          "IsOk": false,
          "StatusMessages": ""
        }, {
          "Contract": "Familiprix.PPS.SDK.Types.Services.IFppsPatient2Service",
          "Endpoint": "http://localhost:60240/PPS2",
          "SuggestedEndpoints": ["http://localhost:60140/PPS2"],
          "IsOk": false,
          "StatusMessages": ""
        }, {
          "Contract": "Familiprix.PPS.Common.Services.IFppsPharmacistService",
          "Endpoint": "http://localhost:60241/PPS",
          "SuggestedEndpoints": ["http://localhost:60141/PPS"],
          "IsOk": false,
          "StatusMessages": ""
        }, {
          "Contract": "Familiprix.FUAS.SDK.Types.Services.IFuasSessionService",
          "Endpoint": "http://localhost:60243/PPS",
          "SuggestedEndpoints": ["http://localhost:60143/PPS", "http://localhost:61143/PPS"],
          "IsOk": false,
          "StatusMessages": "More than one service implement this contract"
        }],
        "Services": [{
          "Contract": "Familiprix.PPS.SDK.Types.Services.IFppsPatientService",
          "Endpoint": "http://localhost:60140/PPS"
        }, {
          "Contract": "Familiprix.PPS.SDK.Types.Services.IFppsPatient2Service",
          "Endpoint": "http://localhost:60140/PPS2"
        }, {
          "Contract": "Familiprix.PPS.Common.Services.IFppsPharmacistService",
          "Endpoint": "http://localhost:60141/PPS"
        }, {
          "Contract": "Familiprix.FUAS.SDK.Types.Services.IFuasSessionService",
          "Endpoint": "http://localhost:60143/PPS"
        }, {
          "Contract": "Familiprix.FUAS.SDK.Types.Services.IFuasSessionService",
          "Endpoint": "http://localhost:61143/PPS"
        }],
        "Path": "C:\\FAM_APP\\Familiprix.PPS.ServiceProxy\\Familiprix.PPS.ServiceProxy.exe",
        "Accronyme": "FPPS (Proxy)",
        "FileDate": "2014-10-10T14:39:06.2026257-04:00",
        "Status": "Stopped"
      }, {
        "ConnectionStringFile": "csTemp11.config",
        "ShortName": " Patient Provider Schedule ",
        "Id": "9584f904-c288-4836-9419-0972e232f764",
        "Group": "PPS",
        "GroupColor": "#662482",
        "Name": "Familiprix Patient Provider Schedule Service",
        "Description": "Provided services to patients for pharmacy appointments",
        "LiveUpdate": {
          "Enabled": false,
          "Source": ""
        },
        "Clients": [{
          "Contract": "Familiprix.PAS.Common.Services.IFpasApplicationService",
          "Endpoint": "http://localhost:60264/PAS",
          "SuggestedEndpoints": [],
          "IsOk": false,
          "StatusMessages": "No service implements this contract"
        }],
        "Services": [{
          "Contract": "Familiprix.PPS.Common.Services.IFppsScheduleAdminService",
          "Endpoint": "http://localhost:60130/PPSSchedule"
        }, {
          "Contract": "Familiprix.PPS.Common.Services.IFppsSchedulePatientService",
          "Endpoint": "http://localhost:60131/PPSSchedule"
        }],
        "Path": "C:\\FAM_APP\\Familiprix.PPS.Schedule.Service\\Familiprix.PPS.Schedule.Service.exe",
        "Accronyme": "FPPSS",
        "FileDate": "2016-09-23T12:41:05.1349484-04:00",
        "Status": "Stopped"
      }, {
        "ConnectionStringFile": "",
        "ShortName": " Priorx PPS Stub ",
        "Id": "a44d58b0-ea34-4fac-a633-69342ad6db71",
        "Group": "N/A",
        "GroupColor": "orange",
        "Name": "Familiprix Priorx PPS Stub Service",
        "Description": "F-PPS Simulator service for Priorx.",
        "LiveUpdate": {
          "Enabled": false,
          "Source": ""
        },
        "Clients": [],
        "Services": [{
          "Contract": "Familiprix.PPS.Common.Services.IPriorxService2",
          "Endpoint": "http://localhost:60110/4185556666"
        }, {
          "Contract": "Familiprix.PPS.PriorxStubService.Services.IPriorxTDDService",
          "Endpoint": "http://localhost:60111/4185556666"
        }, {
          "Contract": "Familiprix.PPS.Common.Services.IPriorxResidenceService",
          "Endpoint": "http://localhost:60112/4185556666"
        }],
        "Path": "C:\\FAM_APP\\Familiprix.PPS.PriorxStubService\\Familiprix.PPS.PriorxStubService.exe",
        "Accronyme": "FPPSS",
        "FileDate": "2014-10-10T14:38:32.0876744-04:00",
        "Status": "Stopped"
      }, {
        "ConnectionStringFile": "",
        "ShortName": " Patient Provider Schedule  (proxy)",
        "Id": "bf5044ad-8939-4652-a380-622c9a9cf118",
        "Group": "PPS",
        "GroupColor": "#662482",
        "Name": "Familiprix Patient Provider Schedule Service (proxy)",
        "Description": "Provided services to patients for pharmacy appointments",
        "LiveUpdate": {
          "Enabled": false,
          "Source": ""
        },
        "Clients": [{
          "Contract": "Familiprix.PPS.Common.Services.IFppsScheduleAdminService",
          "Endpoint": "http://localhost:60130/PPSSchedule",
          "SuggestedEndpoints": ["http://localhost:60140/PPSSchedule"],
          "IsOk": false,
          "StatusMessages": ""
        }, {
          "Contract": "Familiprix.PPS.Common.Services.IFppsSchedulePatientService",
          "Endpoint": "http://localhost:60131/PPSSchedule",
          "SuggestedEndpoints": ["http://localhost:60141/PPSSchedule"],
          "IsOk": false,
          "StatusMessages": ""
        }],
        "Services": [{
          "Contract": "Familiprix.PPS.Common.Services.IFppsScheduleAdminService",
          "Endpoint": "http://localhost:60140/PPSSchedule"
        }, {
          "Contract": "Familiprix.PPS.Common.Services.IFppsSchedulePatientService",
          "Endpoint": "http://localhost:60141/PPSSchedule"
        }],
        "Path": "C:\\FAM_APP\\Familiprix.PPS.Schedule.ServiceProxy\\Familiprix.PPS.Schedule.ServiceProxy.exe",
        "Accronyme": "FPPSS (proxy)",
        "FileDate": "2016-09-23T12:41:05.180951-04:00",
        "Status": "Stopped"
      }, {
        "ConnectionStringFile": "",
        "ShortName": " Residence Provider PPS Stub ",
        "Id": "569245ef-990a-4a81-8916-9ac9266b7adb",
        "Group": "N/A",
        "GroupColor": "orange",
        "Name": "Familiprix Residence Provider PPS Stub Service",
        "Description": "F-PPS Simulator service for Residence Providers.",
        "LiveUpdate": {
          "Enabled": false,
          "Source": ""
        },
        "Clients": [],
        "Services": [],
        "Path": "C:\\FAM_APP\\Familiprix.PPS.ResidenceStubService\\Familiprix.PPS.ResidenceStubService.exe",
        "Accronyme": "FRPPSS",
        "FileDate": "2015-08-21T10:18:47.0693935-04:00",
        "Status": "Stopped"
      }, {
        "ConnectionStringFile": "",
        "ShortName": " Unified Account ",
        "Id": "32902a98-02ac-41ac-bafb-fc477d2cc59a",
        "Group": "UAS",
        "GroupColor": "#E6007E",
        "Name": "Familiprix Unified Account Service",
        "Description": "This service is connected by other services that need a single user login.",
        "LiveUpdate": {
          "Enabled": false,
          "Source": ""
        },
        "Clients": [{
          "Contract": "Familiprix.FUAS.SDK.Types.Services.IFuasSessionService",
          "Endpoint": "http://localhost:60257/PPS",
          "SuggestedEndpoints": [],
          "IsOk": false,
          "StatusMessages": "No service implements this contract"
        }],
        "Services": [{
          "Contract": "Familiprix.FUAS.Common.Services.IFuasService",
          "Endpoint": "http://localhost:60243/FUAS"
        }, {
          "Contract": "Familiprix.FUAS.Common.Services.IFuasTrustedService",
          "Endpoint": "http://localhost:60244/FUAS"
        }, {
          "Contract": "Familiprix.FUAS.Common.Services.IFuasIdentityServerService",
          "Endpoint": "http://localhost:60247/FUAS"
        }, {
          "Contract": "Familiprix.FUAS.Common.Services.IFuasTDDService",
          "Endpoint": "http://localhost:60248/FUAS"
        }, {
          "Contract": "Familiprix.FUAS.Common.Services.IFuasLogEventService",
          "Endpoint": "http://localhost:60249/FUAS"
        }],
        "Path": "C:\\Familiprix\\FUAS\\trunk\\Service\\bin\\Debug\\Familiprix.FUAS.Service.exe",
        "Accronyme": "FUAS",
        "FileDate": "2017-05-09T16:04:18.5120161-04:00",
        "Status": "Stopped"
      }, {
        "ConnectionStringFile": "",
        "ShortName": " Unified Account  (Proxy)",
        "Id": "7995bf02-4e41-42fc-8831-3786e2f36b27",
        "Group": "UAS",
        "GroupColor": "#E6007E",
        "Name": "Familiprix Unified Account Service (Proxy)",
        "Description": "This service proxy is connected by other services that need a single user login.",
        "LiveUpdate": {
          "Enabled": false,
          "Source": ""
        },
        "Clients": [{
          "Contract": "Familiprix.FUAS.Common.Services.IFuasService",
          "Endpoint": "http://localhost:60243/FUAS",
          "SuggestedEndpoints": [],
          "IsOk": false,
          "StatusMessages": "No service implements this contract"
        }, {
          "Contract": "Familiprix.FUAS.Common.Services.IFuasIdentityServerService",
          "Endpoint": "http://localhost:60247/FUAS",
          "SuggestedEndpoints": ["http://localhost:60147/FUAS"],
          "IsOk": false,
          "StatusMessages": ""
        }, {
          "Contract": "Familiprix.FUAS.Common.Services.IFuasLogEventService",
          "Endpoint": "http://localhost:60249/FUAS",
          "SuggestedEndpoints": ["http://localhost:60149/FUAS"],
          "IsOk": false,
          "StatusMessages": ""
        }],
        "Services": [{
          "Contract": "Familiprix.FUAS.Common.Services.IFuasIdentityServerService",
          "Endpoint": "http://localhost:60147/FUAS"
        }, {
          "Contract": "Familiprix.FUAS.Common.Services.IFuasLogEventService",
          "Endpoint": "http://localhost:60149/FUAS"
        }],
        "Path": "C:\\Familiprix\\FUAS\\trunk\\ServiceProxy\\bin\\Debug\\Familiprix.FUAS.ServiceProxy.exe",
        "Accronyme": "FUAS (Proxy)",
        "FileDate": "2017-05-08T09:16:09.3443833-04:00",
        "Status": "Running"
      }, {
        "ConnectionStringFile": "",
        "ShortName": " Vigilance ",
        "Id": "26ffecc9-1ce3-477d-b47a-975d1fd87fa5",
        "Group": "N/A",
        "GroupColor": "orange",
        "Name": "Familiprix Vigilance Service",
        "Description": "Service that analyzes drug interractions for patient records.",
        "LiveUpdate": {
          "Enabled": false,
          "Source": ""
        },
        "Clients": [{
          "Contract": "Familiprix.VS.Common.Services.IVigilanceService",
          "Endpoint": "net.tcp://127.0.0.1:60999/Vs",
          "SuggestedEndpoints": ["net.tcp://127.0.0.1:60999/Vs"],
          "IsOk": true,
          "StatusMessages": ""
        }],
        "Services": [{
          "Contract": "Familiprix.VS.Common.Services.IVigilanceService",
          "Endpoint": "net.tcp://127.0.0.1:60999/Vs"
        }],
        "Path": "C:\\FAM_APP\\Familiprix.VS.Service\\familiprix.vs.service.exe",
        "Accronyme": "FVS",
        "FileDate": "2014-05-20T16:04:32.3289428-04:00",
        "Status": "Stopped"
      }]
    }
  });
