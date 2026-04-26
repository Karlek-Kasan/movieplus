import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1B2A",
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  header: {
    marginBottom: 32,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    color: "#8A9BB0",
    fontSize: 14,
    lineHeight: 22,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    color: "#8A9BB0",
    fontSize: 13,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#1A2B3C",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: "#FFFFFF",
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#243447",
  },
  inputFocused: {
    borderColor: "#12CDD9",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1A2B3C",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#243447",
    paddingHorizontal: 16,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 14,
    color: "#FFFFFF",
    fontSize: 15,
  },
  eyeIcon: {
    padding: 4,
  },
  eyeIconText: {
    fontSize: 18,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 24,
    marginTop: 4,
  },
  forgotPasswordText: {
    color: "#12CDD9",
    fontSize: 13,
  },
  primaryButton: {
    backgroundColor: "#12CDD9",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#12CDD9",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#243447",
  },
  dividerText: {
    color: "#8A9BB0",
    fontSize: 13,
    marginHorizontal: 12,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  footerText: {
    color: "#8A9BB0",
    fontSize: 14,
  },
  footerLink: {
    color: "#12CDD9",
    fontSize: 14,
    fontWeight: "600",
  },
});