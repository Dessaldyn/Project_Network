    document.getElementById('monitoring-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        // Ambil nilai input dari form
        const deviceName = document.getElementById('device-name').value;
        const deviceIP = document.getElementById('device-ip').value;
        const domain = document.getElementById('domain').value;
    
        // Tampilkan status monitoring
        document.getElementById('status-output').textContent = "Monitoring in progress...";
    
        // Mulai proses monitoring perangkat
        monitorDevice(deviceName, deviceIP, domain);
    });
    
    function monitorDevice(deviceName, deviceIP, domain) {
        let report = `Monitoring Report for ${deviceName} (IP: ${deviceIP})\n`;
        
        // Simulasi status perangkat menggunakan ping
        const pingStatus = simulatePing(deviceIP);
        report += `Device Status: ${pingStatus.status} (Latency: ${pingStatus.latency} ms)\n\n`;
    
        // Simulasi DNS Resolution
        const dnsStatus = simulateDNSResolution(domain);
        report += `DNS Resolution for ${domain}: ${dnsStatus}\n`;
    
        // Tampilkan laporan
        document.getElementById('report-output').textContent = report;
    
        // Update status
        document.getElementById('status-output').textContent = "Monitoring complete.";
    }
    
    // Fungsi untuk mensimulasikan ping perangkat
    function simulatePing(ip) {
        // Mensimulasikan status perangkat dengan pengaturan acak
        const isOnline = Math.random() > 0.5; // 50% kemungkinan perangkat online
        const latency = isOnline ? (Math.random() * 100).toFixed(2) : null;
    
        return {
        status: isOnline ? 'ONLINE' : 'OFFLINE',
        latency: latency
        };
    }
    
    // Fungsi untuk mensimulasikan DNS resolution
    function simulateDNSResolution(domain) {
        // Mensimulasikan hasil DNS dengan nama domain tertentu
        const dnsRecords = {
        "ujian.com": "192.168.80.6",
        "google.com": "8.8.8.8",
        "example.com": "93.184.216.34"
        };
    
        if (dnsRecords[domain]) {
        return `Resolved to ${dnsRecords[domain]}`;
        } else {
        return "Resolution failed";
        }
    }
    