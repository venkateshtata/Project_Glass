
var simple_chart_config = {
	chart: {
		container: "#OrganiseChart-simple",
		hideRootNode: true,
		connectors: {
			type: 'step',
			style: {
				"arrow-end": "classic-wide-long",
				"stroke-width": 2,
				"stroke": "#90AFC5"
			}
		},
		node: {
			collapsable: true
		},
		animation: {
			nodeAnimation: "easeOutBounce",
			nodeSpeed: 700,
			connectorsAnimation: "bounce",
			connectorsSpeed: 700
		}
	},
	
	nodeStructure: {
		text: { name: "Parent node" },
		children: [
			{	
				HTMLclass: "timeline main-date",
				text: { desc: "", name: "2015" },
				children: [
					{
						text: { name: "SOCIAL MANAGEMENT FOR RAJASTHAN POLICE" },
						children: [
							{
								image: "img/malory.png",
								text: { name: "Procuring Entity Name : Mrs. Manasa Gulati"},
								children: [
									{
										text: { From: "From: 14/07/2015"}
						
									},
									{
										text: { To: "To: 14/07/2015"}
						
									},
									{
										text: { name: "id:0x445651713ad842715a607a7ec1fb7d0ebe45a2d594919e9b302841c564060a3e" }
									}

								]
						
							}
						]

					},
					{
						text: { name: "RISK PURCHASE FOR RICE" },
						children: [
							{
								image: "img/malory.png",
								text: { name: "Procuring Entity Name : Mr. Vijay Purohit"},
								children: [
									{
										image: "img/malory.png",
										text: { name: "Mid-Person: Mr. Patanjali Jagatap"},
						
									},
									{
										image: "img/malory.png",
										text: { name: "Mid-Person: Ms. Chamunda Padhi"},
										children: [
									{
										text: { From: "From: 14/07/2015"}
						
									},
									{
										text: { To: "To: 14/07/2015"}
										
									},
									{
										text: { name: "id:0x70972900e7828f4f67585bf1d3d47b06f9d49cadeeaf1b476015f4d1006f0903" }
									}
									]

									}
								]
						
							}
						]
					},
					{
						text: { name: "DRUG CONTROL" },
						children: [
							{
								image: "img/malory.png",
								text: { name: "Procuring Entity Name : Mr. Manish M.T."},
								children: [
									{
										text: { From: "From: 14/07/2015"}
						
									},
									{
										text: { To: "To: 14/07/2015"}
						
									},
									{
										text: { name: "id :0xa1328fa1bb394b8e259c755ce8e89c8f45be1cc950bb982992d31f9fe0091d4b" }
									}

								]
						
							}
						]
					}	

				]
			},
			{	
				HTMLclass: "main-date",
				text: { name: "2016" },
				children: [
					{
						text: { name: "Supply and installation of Computers" },
						children: [
							{
								image: "img/malory.png",
								text: { name: "Procuring Entity Name: Mr. Chatur Ojha, Mr. Ramkumar AP"},
								children: [
									{
										text: { From: "From: 14/07/2016"}
						
									},
									{
										text: { To: "To: 13/07/2016"}
						
									},
									{
										text: { name: "Transaction ID" }
									}

								]
						
							}
						]

					},
					{
						text: { name: "Construction of C.C. Road" },
						children: [
							{
								image: "img/malory.png",
								text: { name: "Procuring Entity Name : Mr. Vijay Purohit"},
								children: [
									{
										image: "img/malory.png",
										text: { name: "Mid-Person: Ms. Chamunda Padhi"},
										children: [
									{
										text: { From: "From: 01/02/2016"}
						
									},
									{
										text: { To: "To: 07/07/2016"}
										
									},
									{
										text: { name: "Transaction ID" }
									}
									]

									}
								]
						
							}
						]
					},
					{
						text: { name: "Purchase of HT HRC/Expulsion Fuses"},
						
						children: [
							{
								image: "img/malory.png",
								text: { name: "Procuring Entity Name : Mrs. Archita Patil"},
								children: [
									{
										text: { From: "From: 14/02/2016"}
						
									},
									{
										text: { To: "To: 13/07/2016"}
						
									},
									{
										text: { name: "Transaction ID" }
									}

								]
						
							}
						]
					}

				]
				
			},
			{
				HTMLclass: "main-date",
				text: { name: "2017" },
				children: [
					{
						text: { name: "Const of Recharge Shaft" },
						children: [
							{
								image: "img/malory.png",
								text: { name: "Procuring Entity Name: Shreya Jagatap T"},
								children: [
									{
										text: { From: "From: 14/03/2017"}
						
									},
									{
										text: { To: "To: 13/12/2017"}
						
									},
									{
										text: { name: "Transaction ID" }
									}

								]
						
							}
						]

					},
					{
						text: { name: "Handling work of Wheat" },
						children: [
							{
								image: "img/malory.png",
								text: { name: "Procuring Entity Name : Mr. Jayadeva Navathe"},
								children: [
									{
										text: { From: "From: 22/02/2017"}
						
									},
									{
										text: { To: "To: 22/03/2017"}
										
									},
									{
										text: { name: "Transaction ID" }
									}
								]
						
							}
						]
					},
					{
						text: { name: "Transportation work"},
						
						children: [
							{
								image: "img/malory.png",
								text: { name: "Procuring Entity Name : Mr. Raghu Bagchi"},
								children: [
									{
										image: "img/malory.png",
										text: { name: "Mid-Person: Mr. Gagan Bagchi"},
										children: [
									{
										text: { From: "From: 01/02/2017"}
						
									},
									{
										text: { To: "To: 07/07/2017"}
										
									},
									{
										text: { name: "Transaction ID" }
									}
									]

									}
								]
						
							}
						]
					}

				]
			}
		]
	}
};
