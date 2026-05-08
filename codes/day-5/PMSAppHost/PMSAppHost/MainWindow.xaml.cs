using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Microsoft.Web.WebView2.Core;

namespace PMSAppHost
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            InitializeWebView2Async();
        }
        public async void InitializeWebView2Async()
        {
            await pmsAppWebView.EnsureCoreWebView2Async(null);
            pmsAppWebView.CoreWebView2.SetVirtualHostNameToFolderMapping(
                "siemens.com",
                $"{Environment.CurrentDirectory}\\pmsapp\\browser", CoreWebView2HostResourceAccessKind.DenyCors
                );
            pmsAppWebView.Source = new Uri("http://siemens.com/index.html");
        }
    }
}