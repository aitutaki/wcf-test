var BasicHttpBinding = require('wcf.js').BasicHttpBinding;
var Proxy = require('wcf.js').Proxy;
var binding = new BasicHttpBinding({
    SecurityMode: "TransportWithMessageCredential",
    MessageClientCredentialType: "UserName"
  });
var proxy = new Proxy(binding, "https://services.test.stenaline.com/Host.Web.FWS/Service.svc/ReservationService");
var message =  "<Envelope xmlns='http://schemas.xmlsoap.org/soap/envelope/'>" +
                 "<Header />" +
                   "<Body>" +
                    //'<ListCodesRequest xmlns="http://schemas.stenaline.com/freightlink/ws/2014/05/"> <Type xmlns="http://www.stenaline.com/freightlink/ws/2014/05/">Goods</Type> </ListCodesRequest>' +
                    //'<ConfirmBookingRequest xmlns="http://schemas.stenaline.com/freightlink/ws/2014/05/"> <Booking xmlns:d4p1="http://schemas.stenaline.com/freightlink/ws/2014/05/" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.stenaline.com/freightlink/ws/2014/05/"> <d4p1:ID i:nil="true" /> <d4p1:Status i:nil="true" /> <d4p1:IsReadOnly i:nil="true" /> <d4p1:CustomerNumber>738922</d4p1:CustomerNumber> <d4p1:CustomerReference>12345</d4p1:CustomerReference> <d4p1:CustomerReferenceTelephoneNumber i:nil="true" /> <d4p1:RouteCode>LPBE</d4p1:RouteCode> <d4p1:DepartureDateTime>2015-03-17T10:30:00</d4p1:DepartureDateTime> <d4p1:VehicleRegistrationNumber>TC001</d4p1:VehicleRegistrationNumber> <d4p1:TrailerRegistrationNumber></d4p1:TrailerRegistrationNumber> <d4p1:VehicleTypeCode>AR</d4p1:VehicleTypeCode> <d4p1:Length>10</d4p1:Length> <d4p1:Weight>18</d4p1:Weight> <d4p1:Height>2</d4p1:Height> <d4p1:Width>2</d4p1:Width> <d4p1:NumberOfDrivers>1</d4p1:NumberOfDrivers> <d4p1:HazardousGoods>false</d4p1:HazardousGoods> <d4p1:Livestock>false</d4p1:Livestock> <d4p1:Plugin>0</d4p1:Plugin> <d4p1:CheckinMessage></d4p1:CheckinMessage> <d4p1:Addresses> <d4p1:Address> <d4p1:Type>Owner</d4p1:Type> <d4p1:Name>Freightlink Solutions</d4p1:Name> <d4p1:Address1>Quarry Bank, Chorley Road</d4p1:Address1> <d4p1:Address2 i:nil="true" /> <d4p1:City>Preston</d4p1:City> <d4p1:County>Lancashire</d4p1:County> <d4p1:Postcode>PR1 4JN</d4p1:Postcode> <d4p1:CountryCode>GB</d4p1:CountryCode> <d4p1:TelephoneNumber>0844 847 9000</d4p1:TelephoneNumber> </d4p1:Address> </d4p1:Addresses> <d4p1:Drivers> <d4p1:Driver> <d4p1:Name>Tom Crawley</d4p1:Name> <d4p1:Gender>Male</d4p1:Gender> <d4p1:CountryCode>GB</d4p1:CountryCode> <d4p1:AgeGroup>Adult</d4p1:AgeGroup> </d4p1:Driver> </d4p1:Drivers> <d4p1:Goods> <d4p1:Code>CB</d4p1:Code> <d4p1:Description>ChipBoard</d4p1:Description> <d4p1:Weight>1300</d4p1:Weight> </d4p1:Goods> <d4p1:CoastServiceID i:nil="true" /> <d4p1:PlugInTemperature i:nil="true" /> <d4p1:MovementType>Sectional</d4p1:MovementType> </Booking> </ConfirmBookingRequest>' +
                    "</Body>" +
               "</Envelope>";

proxy.ClientCredentials.Username.Username = "ECONNECT\\FRTLINK";
proxy.ClientCredentials.Username.Password = "fr3ightl1nK";


proxy.send(message, "http://www.stenaline.com/freightlink/ws/2014/05/IBookingMetadata/ListVehicleTypes", function(response, ctx) {
  console.log(ctx)
});
